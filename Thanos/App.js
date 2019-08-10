import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const result = Math.random();
  return <View style={styles.container}>
    { result < 0.5 ? (
      <Text>당신은 우주의 균형을 위해 먼지가 되었습니다.</Text>
    ) : (
      <Text>당신은 살아남았습니다.</Text>
    ) }
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
