import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import _ from 'underscore';

export default function App() {
  const [ content, setContent ] = useState( 'Text Here' );
  const [ list, setList ] = useState( [] );
  const addItem = () => {
    const item = {
      id: new Date().getTime().toString(),
      content: content,
    }
    setList( [ ...list, item ] ); // 전개 연산자 Spread Operation
    // setList 에는 항상 새로운 배열을 생성해서 입력한다. "불변성" 
  }
  const remove = id => {
    // https://underscorejs.org/#reject
    setList( _.reject( list, item => item.id === id ) );
  }
  return (
    <View style={styles.container}>
      <TextInput value={ content }
                 onChangeText={ text => setContent( text ) }
                 style={{ width: 300 }}/>
      <Button title="추가" onPress={ () => addItem() }/>
      { list.map( item => (
        <View key={ item.id } style={{flexDirection: 'row'}}>
          <Text>{ item.content }</Text>
          <Button color={'#f00'} title="삭제" onPress={ () => remove( item.id ) }/>
        </View>
      ) ) }
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
