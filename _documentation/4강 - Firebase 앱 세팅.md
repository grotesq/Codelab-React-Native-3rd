# Firebase 앱 세팅

## 키 생성

Firebase 계정 설정에 웹 플랫폼을 추가한다.  
키가 포함된 JSON을 복사해둔다.

```
{
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-cloud-firestore-project>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-sender-id>'
}
```

## 설치

```bash
yarn add firebase
```

## 코드 세팅

```js
// firebaseApp.js
import firebase from 'firebase/app';
// 추가적으로 로드하는 모듈들
import 'firebase/auth';

const keys = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-cloud-firestore-project>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-sender-id>'
};

try {
  firebase.initializeApp( keys );
}
catch( error ) {}

export default firebase;
```
