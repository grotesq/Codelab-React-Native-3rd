import React, { useState } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Form, Input, Label, Textarea, Item, Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { withAppContext } from '../contexts/AppContext';
import _ from 'underscore';

let Settings = ({ navigation, context }) => {
    const updateSize = text => {
        let size = parseInt( text, 10 );
        if( _.isNaN( size ) ) {
            size = 16;
        }
        if( size < 12 ) {
            size = 12;
        }
        context.update( { fontSize: size } );

        AsyncStorage.setItem( 'Settings.fontSize', size.toString() );
    }
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
                 onChangeText={ updateSize }/>
        </Content>
      </Container>
    )
};

Settings = withAppContext( Settings );

export default Settings;