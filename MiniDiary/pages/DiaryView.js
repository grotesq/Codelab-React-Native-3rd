import React from 'react';
import { View } from 'react-native';
import { Form, Item, Label, Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { withAppContext } from '../contexts/AppContext';

let DiaryView = ({navigation, context}) => {
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
                <Text style={{ fontSize: context.fontSize }}>{ item.subject }</Text>
            </View>
            <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#e5e5e5'}}>
                <Text style={{ fontSize: context.fontSize }}>{ item.date }</Text>
            </View>
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: context.fontSize }}>{ item.content }</Text>
            </View>           
        </Content>
      </Container>
    )
};

DiaryView = withAppContext( DiaryView );

export default DiaryView;