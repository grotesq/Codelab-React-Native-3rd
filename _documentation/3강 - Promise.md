# Promise

참조 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises  
참조 : https://mdn.io/promise

콜백 형태의 비동기 처리를 개선하기 위해 ES6에 추가
메소드 체인 형태로 비동기 처리의 성공에 대한 `then()`과 `catch()` 함수를 사용한다.

## 사용편

```javascript
func().then().catch()
```

콜백의 예시

```javascript
const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    console.log( 'onreadystatechange' );
};
httpRequest.open('GET', 'url', true);
httpRequest.send(null);
```

Promise의 예시

```javascript
function log( data ) {
  console.log( data );
}
axios.get( 'url' )
  .then( () => log( 'loaded' ) )
  .catch( error => log( error.message ) );
```

`then`은 중첩될 수 있다.

```javascript
// 실제 이런 함수는 없습니다. fetch를 모델로 하기는 하지만... https://mdn.io/fetch
load( 'json' )
  .then( () => console.log( 'raw 데이터를 json으로 변환' ) )
  .then( () => loadMore( 'json 파일을 기본으로 몇몇 데이터 추가 로드' ) )
  .then( () => console.log( '로드된 데이터를 화면 표시용으로 최종 가공하고 완료' ) )
  .catch( error => console.log( error ) );
  // load를 포함하여 모든 then을 처리하다 에러가 발생하면 catch로 넘어온다.

// 콜백이라면 이런 지옥이 만들어진다

load( 'json', function( raw ) {
  convertJson( raw, function( json ) {
    moreLoad( '...', function( response ) {
      console.log( '로드된 데이터를 화면 표시용으로 최종 가공하고 완료' );
    } );
  } );
} );
```

하지만 익명 함수를 많이 쓰다보면 별 차이 없어 보이기도...

```javascript
load( 'json' )
  .then( () => {
    return console.log( 'raw 데이터를 json으로 변환' )
  } )
  .then( () => {
    return loadMore( 'json 파일을 기본으로 몇몇 데이터 추가 로드' )
  } )
  .then( () => {
    return console.log( '로드된 데이터를 화면 표시용으로 최종 가공하고 완료' )
  } )
  .catch( error => {
    return console.log( error )
  });
```

## 작성편

```javascript
const promise = new Promise( ( resolve, reject ) => {
  const random = Math.random();
  if( random > 0.5 ) {
    resolve( random ); // .then()이 실행되고 값이 전달됨
  }
  else {
    reject( 'Low' ); // .catch()가 실행되고 에러 메시지가 전달됨.
  }
} );

promise
  .then( number => console.log( number ) ) // 성공한다면 Math.random 이 여기에
  .catch( error => console.log( error.message ) ); // 실패한다면 'Low' 텍스트가 여기에
```

## 응용편

setState를 Promise 패턴으로 wrapping 하기

```javascript
setStateAsync = ( newState, callback ) => {
  return new Promise( ( resolve, reject ) => {
    this.setState( newState, () => resolve() );
  } );
}

( async () => {
  await this.setStateAsync( { isLoad: true } );
  console.log( this.state.isLoad ); // true
} )();
```
