import React, { useState } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Form, Input, Label, Textarea, Item, Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { withAppContext } from '../contexts/AppContext';

let Settings = ({ navigation, context }) => {
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent onPress={ () => navigation.goBack() }>
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>설정</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text style={{ fontSize: context.fontSize }}>글꼴 크기</Text>
          <Input value={ context.fontSize.toString() }
                 onChangeText={ text => context.update( { fontSize: parseInt( text, 10 ) } ) }/>
        </Content>
      </Container>
    )
};

Settings = withAppContext( Settings );

export default Settings;