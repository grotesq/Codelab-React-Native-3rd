import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
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

  loadDefault = async () => {
    const response = await axios.get( 'https://api.manana.kr/karaoke.json' );
    this.setState( { songs: response.data } );
  }

  search = async () => {
    if( !this.state.keyword ) {
      alert( '검색어를 입력하세요.' );
      return;
    }
    const url = `https://api.manana.kr/karaoke/singer/${this.state.keyword}.json`;
    const response = await axios.get( url );
    this.setState( { songs: response.data } );
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.loadDefault();
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