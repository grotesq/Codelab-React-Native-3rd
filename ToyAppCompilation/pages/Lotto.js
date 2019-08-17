import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import _ from 'underscore';

const numbers = [];
_.times( 45, n => numbers.push( n + 1 ) ); // 1~45

export default function App({navigation}) {
  const shuffled = _.shuffle( numbers );
  shuffled.length = 6;
  const [ result, setResult ] = useState( shuffled );
  const onPressHandler = () => {
    const shuffled = _.shuffle( numbers );
    shuffled.length = 6;
    setResult( shuffled );
  };
  return (
    <View>
      <Text>{ result.join( ', ' ) }</Text>
      <Button title="다시 생성" onPress={ onPressHandler }/>
      <Button title="뒤로" onPress={ () => navigation.goBack() }/>
    </View>
  );
}