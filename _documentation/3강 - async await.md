# Async / Await

참조 : https://mdn.io/async  
참조 : https://mdn.io/await

Async와 Await는 ECMA Script 2017에 추가  
Promise와 호환/대체하는 목적으로 개발됨

## Async Function

비동기로 동작하는 함수를 만든다.  
`return`을 `then`으로 전달하는 Promise 함수가 만들어진다.

```javascript
async function init() {
  return 'init!';
}
init()
  .then( text => console.log( text ) ) // 'init!'
  .catch( error => console.log( error ) );
```

화살표 함수로도 만들 수 있다.

```javascript
const init = async () => {
    // do something
}
init().then().catch();
```

## Await

비동기로 동작하는 함수를 대기하고 있다가 처리하고 넘어가기 때문에 동기 작업인 것 처럼 진행하게 된다.  
반드시 async function 안에서만 실행되어야 하는 제약이 있다.

```javascript
// Promise
load( 'json' )
  .then( () => console.log( 'raw 데이터를 json으로 변환' ) )
  .then( () => loadMore( 'json 파일을 기본으로 몇몇 데이터 추가 로드' ) )
  .then( () => console.log( '로드된 데이터를 화면 표시용으로 최종 가공하고 완료' ) )
  .catch( error => console.log( error ) );

// Async + Await
const init = async () => {
  try {
    const raw = await load( 'json' ); // then 으로 전달되는 값이 좌측의 변수로 할당된다.
    const json = await convertJson( raw );
    const finalData = await loadMore( json.url );
    console.log( finalData, '로드된 데이터를 화면 표시용으로 최종 가공하고 완료' );
  }
  catch( error ) {
    console.log( error ); // catch는 try ~ catch로 처리할 수 있다.
  }
}
```

모든 Promise는 await로 처리할 수 있다.  
모든 Async Function은 Promise와 같이 `then()` 처리로 응용할 수 있다. 주로 실행부가 Async Function 내부가 아니어서 await를 사용할 수 없을 때 선택한다.
