import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import { AppLoading } from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import TodoList from './pages/TodoList';

// es6 class
export default class App extends React.Component {
  // lifecycle 생성자
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    let marginTop = 0;
    if( Platform.OS === 'android' ) {
      marginTop = Constants.statusBarHeight;
    }

    return (
        <Container style={{marginTop}}>
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
            <TodoList/>
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

  // async / await
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    // const [ ready, setReady ] = useState( false );
    // setReady( true );
    this.setState({ isReady: true });
  }
  // constructor -> render -> componentDidMount -> render
}
