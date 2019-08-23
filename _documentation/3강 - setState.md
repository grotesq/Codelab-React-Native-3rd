# setState

참조 : https://reactjs.org/docs/react-component.html#setstate

setState의 방법은 여러가지가 있는데, 홈페이지에서 표준으로 권하는 방법은 다음과 같다.

```javascript
state = {
  count: 0,
  name: 'John',
  birth: '2000-10-01',
}
this.setState( baseState => {
  // 현재의 state 상태를 baseState 라는 인자로 받는 함수 형태로 처리한다.
  return { count: baseState.count + 1 };
  // baseState 의 count 값을 1만큼 증가시켜 오브젝트 형태로 return 한다.
}, () => console.log( 'setState가 완료된 이후 실행되는 콜백' ) );
```

위 코드에서 `setState`에 전달되는 오브젝트는 `{ count: 1 }` 이다.  
`name`, `birth`는 없지만 리액트는 없는 필드를 삭제하진 않는다.  
`setState`가 완료되면 최종 `state`는 `{ count: 1, name: 'John', birth: '2000-10-01' }`이 된다.

편의를 위해 함수가 아닌 오브젝트만 전달하는 약식 방법도 제공한다.

```javascript
this.setState( { count: this.state.count + 1 } ); // 콜백 생략
```

주의할 점은 `setState`는 변경된 값에 대한 참조를 얉은 참조만 할 뿐 깊은 참조를 하지 않는다.

```javascript
state = {
  name: 'Alfredo',
  birth: '2000-11-12',
  items: [
    {
      type: 'fruit',
      name: 'Apple',
    },
    {
      type: 'fruit',
      name: 'Banana',
    }
  ]
}

this.setState( { name: 'Alfred' } ); // name 만 교체된다
this.setState( { items: [
  { name: 'Apples' }
] } );
// items의 변경은 탐지하지만 배열 내부의 변경까지 탐지하지 않는다.
// 따라서 items가 통채로 replace 된다.

const newItems = [ ...this.state.items ];
newItems[ 0 ].name = 'Apples';
this.setState( { items: newItems } );
// 이런식으로 복제해서 사용하거나, slice, concat 등을 이용해 배열을 오리고 붙여서 사용해야 한다.
```

이 불편에 대한 해결책으로 `immer.js` 와 같은 툴을 도입한다.