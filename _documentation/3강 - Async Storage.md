# Async Storage

참조 : https://docs.expo.io/versions/v34.0.0/react-native/asyncstorage/  
참조 : https://github.com/react-native-community/async-storage

Async Storage는 리액트 네이티브에서 제공하는 가장 간단한 수준의 로컬 데이터 베이스입니다.  
키-값 쌍으로만 저장되고 별도의 쿼리는 지원되지 않습니다. 값은 String만 가능합니다.  
최대 용량은 6메가입니다.  
이 조건을 넘어서는 필요성이 있다면 Async Storage가 아닌 다른 네이티브 모듈을 연동하는 것이 좋습니다.

Async Storage는 React Native에서 떨어져 나와 React Native Community 에서 관리되고 있습니다.  
최신 버전을 사용한다면 https://github.com/react-native-community/async-storage 를 확인하는게 좋습니다.  
Expo에서는 아직 React Native 내부에 포함된 Async Storage를 사용하고 있습니다.  

## 데이터 저장

```javascript
import { AsyncStorage } from 'react-native';

// 저장만
AsyncStorage.setItem( 'unique-name', JSON.stringify( { ... } ) );

// 저장 후 then 처리
AsyncStorage.setItem( 'unique-name', JSON.stringify( { ... } ) )
  .then( () => console.log( 'saved!' );

// await로 처리 (async function 안에서)
await AsyncStorage.setItem( 'unique-name', JSON.stringify( { ... } ) );
```

## 데이터 읽어오기

```javascript
AsyncStorage.getItem( 'unique-name' )
  .then( data => console.log( data ) );
  
const data = await AsyncStorage.getItem( 'unique-name' );
console.log( data );
```
