import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import firebaseApp from './firebaseApp';
import _ from 'underscore';

const db = firebaseApp.firestore();

class App extends React.Component {
  state = {
    message: '',
    list: [],
  }

  submit = async () => {
    if( this.state.message === '' ) return;
    await db.collection( 'messages' ).add( {
      type: 'text',
      content: this.state.message,
      timestamp: new Date().getTime(),
     } );
     this.setState( { message: '' } );
  }

  render() {
    return <View style={styles.container}>
      { this.state.list.map( message => (
        <Text key={ message.id }>
          { message.content }
        </Text>
      ) )}
      <TextInput value={ this.state.message }
                 onChangeText={ text => this.setState( { message: text } ) }
                 style={{ width: 360, borderBottomColor: '#000', borderBottomWidth: 1 }}
                 />
      <Button title={'전송'} onPress={ this.submit }/>
    </View>
  }

  componentDidMount() {
    db.collection('messages').onSnapshot((querySnapshot) => {
      let newList = [];
      querySnapshot.forEach(function(doc) {
        newList.push( { ...doc.data(), id: doc.id } );
      });
      newList = _.sortBy( newList, 'timestamp' );
      this.setState( { list: newList } );
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;