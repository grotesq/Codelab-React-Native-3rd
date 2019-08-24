import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      keyword: '',

      confmKey: 'devU01TX0FVVEgyMDE5MDgyNDE1MzgzMDEwODk3NDI=',
      currentPage: 1,
      countPerPage: 10,
      resultType: 'json',

      list: [],
    };
  }

  search = async () => {
    // get 요청의 경우
    // https://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=key&currentPage=1&countPerPage=10&keyword=검색어&resultType=json
    
    const params = {
      keyword,
      confmKey,
      currentPage,
      countPerPage,
      resultType,
    } = this.state;

    const url = `https://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${this.state.confmKey}&currentPage=${this.state.currentPage}&countPerPage=${this.state.countPerPage}&resultType=${this.state.resultType}&keyword=${this.state.keyword}`;

    const response = await axios.get( url );
    // console.log( response.data );
    this.setState( { list: response.data.results.juso });
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
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
                 placeholder="검색어를 입력하세요."/>
          <Button full onPress={ this.search }>
            <Text>검색</Text>
          </Button>
          { this.state.list.map( juso => (
            <View key={ juso.bdMgtSn } style={{ padding: 4, borderBottomWidth: 1 }}>
              <Text>({ juso.zipNo })</Text>
              <Text>{ juso.roadAddr }</Text>
              <Text>{ juso.jibunAddr }</Text>
            </View>
          ) ) }
        </Content>
      </Container>
    );
  }
}