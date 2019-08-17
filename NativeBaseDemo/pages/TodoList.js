import React, { useState } from 'react';
import { Platform, Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import _ from 'underscore';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import Item from '../components/Item';

const Row = styled.View`
  flex-direction: row;
`
const Input = styled.TextInput`
  width: 300;
  border-color: #000;
  border-bottom-width: 1;
`

const CustomButton = styled.TouchableOpacity`
  
`
/*
<View style={{ flexDirection: 'row', width: 350, ... }}/>
<TodoItem/>
*/

export default function App() {
  const [ content, setContent ] = useState( '' );
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
  // const inputStyle = {
  //   width: 300,
  //   borderColor: "#000",
  //   borderBottomWidth: 1,
  // }
  let marginTop = 0;
  if( Platform.OS === 'android' ) {
    marginTop = Constants.statusBarHeight;
  }
  return (
    <>
        <View style={ [ styles.row, { marginBottom: 12 } ] }>
          <Input value={ content }
                 onChangeText={ text => setContent( text ) }
                 />
          <Button title="추가" onPress={ () => addItem() }/>
        </View>
        { list.map( item => (
          <Item key={ item.id } item={ item } remove={ remove }/>
        ) ) }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  row: {
    flexDirection: 'row'
  },
  todoItem: {
    width: 350,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputStyle: {
    width: 300,
    borderColor: "#000",
    borderBottomWidth: 1,
  }
});
