import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const width = Dimensions.get( 'window' ).width;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'https://expo.io' }}
               style={{ width }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
