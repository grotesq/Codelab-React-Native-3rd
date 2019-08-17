import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Thanos from './pages/Thanos';
import Lotto from './pages/Lotto';
import List from './pages/List';
import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

List.navigationOptions = {
  title: '토이 앱 합본팩',
  // header: null,
};
Thanos.navigationOptions = {
  title: '타노스 스냅',
};

// 네비게이터 생성
const navigator = createStackNavigator({
  List,
  Thanos,
  Lotto,
});

// 컨테이너 생성
const AppContainer = createAppContainer( navigator );

export default function App() {
  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
