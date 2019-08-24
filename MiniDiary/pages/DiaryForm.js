import React, { useState } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Form, Input, Label, Textarea, Item, Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default ({ navigation }) => {
    const [ subject, setSubject ] = useState('');
    const [ date, setDate ] = useState('');
    const [ content, setContent ] = useState( '' );

    const save = async () => {
        if( !subject ) {
            Alert.alert( '제목은 필수 입력 항목입니다.' );
            return ;
        }
        if( !date ) {
            Alert.alert( '날짜는 필수 입력 항목입니다.' );
            return ;
        }
        if( !content ) {
            Alert.alert( '본문은 필수 입력 항목입니다.' );
            return ;
        }

        const data = {
            id: new Date().getTime().toString(),
            subject,
            date,
            content
        }

        // Async Storage 에서 데이터 가져오기
        let storage = await AsyncStorage.getItem( 'diaryData' );
        if( !storage ) {
            storage = [];
        }
        else {
            storage = JSON.parse( storage );
        }

        storage.unshift( data );

        // Async Storage에 데이터 저장하기
        await AsyncStorage.setItem( 'diaryData', JSON.stringify( storage ) );

        navigation.goBack();
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
            <Title>새 글 작성 </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>제목</Label>
              <Input value={ subject } onChangeText={ text => setSubject( text )} />
            </Item>
            <Item fixedLabel last>
              <Label>날짜</Label>
              <Input value={ date } onChangeText={ text => setDate( text ) }
                     placeholder="YYYY-MM-DD" />
            </Item>
            <Textarea value={ content } onChangeText={ text => setContent( text ) }
                      rowSpan={15} bordered placeholder="내용을 입력해주세요."/>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={ save }>
              <Text>저장</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
};