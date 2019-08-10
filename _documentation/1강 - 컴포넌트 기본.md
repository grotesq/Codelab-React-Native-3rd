# 컴포넌트 (기본)

리액트의 가장 기본적인 컴포넌트는 함수형 컴포넌트

```js
function CustomComponent() {
    return <Text>Name</Text>;
}
```

화살표 함수로도 선언 가능

```js
const CustomComponent = () => {
    return <Text>Name</Text>;
}

// 축약
const CustomComponent = () => <Text>Name</Text>

// 괄호를 이용한 축약 + 여러줄 표현
const CustomComponent = () => (
    <View>
        <Text>Name</Text>
    </View>
)
```

하나의 파일에서는 하나의 기본 export를 선언할 수 있음

```js
const CustomComponent = () => <Text>Name</Text>;
export default CustomComponent;

// 함수 선언과 export 를 동시에 할 수 있음
export default () => <Text>Name</Text>
```