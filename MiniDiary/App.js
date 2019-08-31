import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import DiaryList from './pages/DiaryList';
import DiaryView from './pages/DiaryView';
import DiaryForm from './pages/DiaryForm';
import Settings from './pages/Settings';
import { AppProvider } from './contexts/AppContext';
import { AsyncStorage } from 'react-native';

DiaryList.navigationOptions = {
  header: null,
}
DiaryView.navigationOptions = {
  header: null,
}
DiaryForm.navigationOptions = {
  header: null,
}
Settings.navigationOptions = {
  header: null,
}

const Navigator = createStackNavigator({
  DiaryList,
  DiaryView,
  DiaryForm,
  Settings,
});

const AppContainer = createAppContainer( Navigator );

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      fontSize: 16,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    let size = await AsyncStorage.getItem( 'Settings.fontSize' );
    if( size ) {
      size = parseInt( size, 10 );
    }
    else {
      size = 16;
    }
    this.setState({ isReady: true, fontSize: size });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <AppProvider fontSize={ this.state.fontSize }>
        <AppContainer>

        </AppContainer>
      </AppProvider>
    );
  }
}