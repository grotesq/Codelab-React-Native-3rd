# Firestore

Firestore는 NoSQL 구조의 데이터베이스이다.  

## Document

JSON 형태로 저장되는 기본 저장 단위

## Collection

Document 들이 모여있는 집합

## 설정

```js
// firebaseApp.js
import firebase from 'firebase/app';
import 'firebase/firestore'; // 추가

// 사용할 파일에서
import firebaseApp from './firebaseApp';
const db = firebaseApp.firestore();
```

## 데이터 쓰기

 ```js
// Promise 패턴이므로 then 혹은 await 처리 가능
db.collection( 'messages' ).add( {
  type: 'text',
  content: 'Hello, Firestore',
  timestamp: new Date().getTime(),
} );
```

## 데이터 읽기

```js
// 모든 데이터를 가져옴
db.collection('messages').get().then((querySnapshot) => {
  // 스냅샷은 배열 형태임
  querySnapshot.forEach((doc) => {
    // 모든 도큐먼트는 id가 할당됨. 리액트에서 key로 활용 가능 
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
```

## 데이터 실시간 읽기

```js
// onSnapshot 이벤트를 이용해서 실시간 읽기 가능
db.collection('messages').onSnapshot((querySnapshot) => {
  querySnapshot.forEach(function(doc) {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
```
