import React from 'react';  
import { AsyncStorage } from 'react-native';
import { Container, Text, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { NavigationEvents } from 'react-navigation';

class DiaryList extends React.Component {
    state = {
        list: []
    }
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right />
                </Header>
                <Content>
                    { this.state.list.map( item => (
                        <Button key={ item.id } onPress={ () => this.props.navigation.navigate( 'DiaryView', { item } )}>
                            <Text>[{ item.date }] { item.subject }</Text>
                        </Button>
                    ))}
                </Content>
                <Footer>
                <FooterTab>
                    <Button full onPress={ () => this.props.navigation.navigate( 'DiaryForm' )}>
                    <Text>새 글 작성</Text>
                    </Button>
                </FooterTab>
                </Footer>
                <NavigationEvents
                    onDidFocus={ async () => {
                        let storage = await AsyncStorage.getItem( 'diaryData' );
                        if( !storage ) {
                            storage = [];
                        }
                        else {
                            storage = JSON.parse( storage );
                        }

                        this.setState( { list: storage } );
                    }}
                />
            </Container>    
        );
    }
}

export default DiaryList;