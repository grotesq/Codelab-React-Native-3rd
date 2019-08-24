import React from 'react';
import { Form, Item, Label, Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default ({navigation}) => {
    const item = navigation.getParam( 'item' );
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent onPress={ () => navigation.goBack() }>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{ item.subject }</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <Form>
                <Item fixedLabel>
                    <Label>제목</Label>
                    <Text>{ item.subject }</Text>
                </Item>
                <Item fixedLabel last>
                    <Label>날짜</Label>
                    <Text>{ item.date }</Text>
                </Item>
                <Text>{ item.content }</Text>
            </Form>            
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
};