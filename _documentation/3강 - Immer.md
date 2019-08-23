# Immer

참조 : https://github.com/immerjs/immer

불변성 관리를 위한 라이브러리. 리액트용으로 만들어진 것이 아니라 리액트와 별개로도 사용할 수 있다.  
데이터 자체를 특정한 규격에 맞추어 만들어야 하는 다른 불변성 라이브러리와는 달리 자바스크립트 기본 오브젝트와 배열을 관리한다.

```javascript
import produce from "immer";

const baseState = [
  {
    todo: "Learn typescript",
    done: true
  },
  {
    todo: "Try immer",
    done: false
  }
];

const nextState = produce( baseState, draftState => {
  // 불변성 유지를 위해 하지 말라고 하던 것들을 이제 할 수 있다
  draftState.push( { todo: "Tweet about it" } );
  draftState[ 1 ].done = true;
} );

console.log( baseState, nextState ); // 완전히 다른 두 개의 객체로 존재
```

리액트에서 사용하기

```javascript
// this.setState( 콜백함수 ) 방식을 이용한다.
this.setState( state => produce( state, draft => {
  draft.push( { todo: "Tweet about it" } );
  draft[ 1 ].done = true;
} ) );

// 복잡해 보인다면 여러줄로 나눠서 보면 조금 도움이 된다.
const nextState = produce( this.state, draft => {
  draft.push( { todo: "Tweet about it" } );
  draft[ 1 ].done = true;
} );
this.setState( nextState );
// this.setState( state => nextState )도 가능하지만 이건 너무 의미가 없으므로..

// 자주 사용되는 패턴인 만큼 함수로 묶어서 사용할 수도 있음
update = ( producer, callback ) => {
  this.setState( state => produce( state, producer ), callback );
}
this.update( ( state, draft ) => {
  draft.push( { todo: "Tweet about it" } );
  draft[ 1 ].done = true;
} );
```

자바스크립트 오브젝트와 배열을 다루기 때문에 기본 setState와 immer를 필요에 따라 혼합해서 사용할 수 있다.