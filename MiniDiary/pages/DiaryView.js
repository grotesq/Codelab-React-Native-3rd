import React from 'react';
import { View } from 'react-native';
import { Form, Item, Label, Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default ({navigation}) => {
    const item = navigation.getParam( 'item' );
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent onPress={ () => navigation.goBack() }>
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{ item.subject }</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#e5e5e5'}}>
                <Text>{ item.subject }</Text>
            </View>
            <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#e5e5e5'}}>
                <Text>{ item.date }</Text>
            </View>
            <View style={{ padding: 16 }}>
                <Text>{ item.content }</Text>
            </View>           
        </Content>
      </Container>
    )
};