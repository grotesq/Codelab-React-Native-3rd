import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import _ from 'underscore';

const numbers = [];
_.times( 45, n => numbers.push( n + 1 ) ); // 1~45

export default function App() {
  const shuffled = _.shuffle( numbers );
  shuffled.length = 6;
  const [ result, setResult ] = useState( shuffled );
  const onPressHandler = () => {
    const shuffled = _.shuffle( numbers );
    shuffled.length = 6;
    setResult( shuffled );
  };
  const [ count, setCount ] = useState( 0 ); // [ 스테이트명, 업데이트함수 ] = useState( 초기값 );
  const [ onOff, setOnOff ] = useState( false );
  return (
    <View style={styles.container}>
      <Text>{ result.join( ', ' ) }</Text>
      <Button title="다시 생성" onPress={ onPressHandler }/>
      <Text>{ count }</Text>
      <Button title="증가" onPress={ () => setCount( count + 1 ) }/>
      <Text>{ onOff ? 'ON' : 'OFF' }</Text>
      <Button title="Toggle" onPress={ () => setOnOff( !onOff ) }/>
    </View>
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
