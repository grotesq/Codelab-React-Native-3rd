import React from 'react';
import styled from 'styled-components/native';
import { Button, Text } from 'react-native';

const TodoItem = styled.View`
  flex-direction: row;
  width: 350;
  justify-content: space-between;
`

// 구조 분해 할당, Destructure Assignment
const Item = ( { item, remove } ) => {
    return (
      <TodoItem>
        <Text>{ item.content }</Text>
        <Button color={'#f00'} title="삭제" onPress={ () => remove( item.id ) }/>
      </TodoItem>
    );
}

export default Item;
// import Item from './components/Item';