# JSX 내에서의 분기 처리

## return 자체를 분기

```js
() => {
    if( condition ) {
        return <Text>Case 1</Text>;
    }
    else {
        return <Text>Case 2</Text>;
    }
}
```

## JSX DOM 내에서 분기

```js
() => (
    <View>
        { condition && (
            <Text>Case 1</Text>
        ) }
        { !condition && (
            <Text>Case 2</Text>
        ) }
    </View>
)
```

## JSX DOM 내에서 삼항식을 사용해 분기

```js
// { condition ? () : () } 의 구조임
() => (
    <View>
        { condition ? (
            <Text>Case 1</Text>
        ) : (
            <Text>Case 2</Text>
        ) }
    </View>
)
```