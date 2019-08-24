import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      songs: [],
      keyword: '',
    };
  }

  /*
    key - `https://api.manana.kr/karaoke.json`
    value - {
      timestamp: new Date().getTime(),
      songs: [ ... ]
    }

    key - `https://api.manana.kr/karaoke/singer/${this.state.keyword}.json`
    value - {
      timestamp: ...,
      songs: [ ... ]
    }
  */

  getSongsFromStorage = async url => {
    let data = await AsyncStorage.getItem( url );
    if( !data ) {
      return null;
    }
    data = JSON.parse( data );
    if( data.timestamp < new Date().getTime() - 86400 ) {
      return null;
    }

    return data;
  }

  load = async url => {
    const songs = await this.getSongsFromStorage( url );
    if( !songs ) {
      const response = await axios.get( url );
      this.setState( { songs: response.data } );
      const data = {
        timestamp: new Date().getTime(),
        songs: response.data,
      }
      await AsyncStorage.setItem( url, JSON.stringify( data ) );
    }
    else {
      this.setState( { songs: songs.songs } );
    }
  }

  search = async () => {
    if( !this.state.keyword ) {
      alert( '검색어를 입력하세요.' );
      return;
    }
    const url = `https://api.manana.kr/karaoke/singer/${this.state.keyword}.json`;
    this.load( url );
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.load( 'https://api.manana.kr/karaoke.json' );
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Input value={ this.state.keyword }
                 onChangeText={ text => this.setState( { keyword: text } ) }
                 placeholder="검색어를 입력하세요"  />
          <Button full onPress={ this.search }><Text>검색</Text></Button>
          { this.state.songs.map( song => (
            <View key={ song.brand + song.no }>
              <Text>[{song.no}] {song.title}</Text>
            </View>
          ) )}
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}