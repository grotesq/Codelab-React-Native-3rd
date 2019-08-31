# Context API

참조 : https://ko.reactjs.org/docs/context.html

<img src="https://www.carlrippon.com/wp-content/uploads/2018/04/prop-drilling-v-context.png" alt="https://www.carlrippon.com/playing-with-the-context-api-in-react-16-3/"/>  
출처: https://www.carlrippon.com/playing-with-the-context-api-in-react-16-3/

## createContext

```js
const AppContext = React.createContext(); 

// 일반적으로 단일 파일 안에서만 사용되는 경우는 없으므로 export 한다
export default AppContext;
```

## Provider

```js
import AppContext from './AppContext';
const Provider = AppContext.Provider;

// 어느 위치에서든 표현할 수 있지만 가급적이면 root 엘리먼트를 감싸는 형태로 사용된다
class App extends React.Component {
  render() {
    return (
      <Provider>
        <Content something />
      </Provider>
    );
  }
}
```

## Consumer

`Context`의 값을 수신하는 객체는 `Consumer`를 감싸는 형태로 만들어져야 한다.  
또한 내부는 함수형 컴포넌트로 선언된다.

```js
import AppContext from './AppContext';
const Consumer = AppContext.Consumer;

<Consumer>
  {value => /* context 값을 이용한 렌더링 */}
</Consumer>
```

## BoilerPlate

```js
import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();
const AppConsumer = Consumer;

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      update: (state, callback) => {
        this.setState(state, callback);
      },
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

// High Order Component 형식으로 withAppContext를 만들어 사용한다.
const withAppContext = TargetComponent => {
  const WithAppContextComponent = props => (
    <AppConsumer>
      {context => <TargetComponent {...props} context={context} />}
    </AppConsumer>
  );
  return WithAppContextComponent;
};

export { AppProvider, AppConsumer, withAppContext };
```

## 사용 예

```js
// App.js
import { AppProvider } from './contexts/AppContext';

class App extends React.Component {
  render() {
    return(
      <AppProvider>
        
      </AppProvider>  
    )
  }
}
```

```js
// My Component
import { withAppContext } from '../contexts/AppContext';

class ClassComponent extends React.Component {
  render() {
    return (
      <>
        { this.props.context.value }
      </>
    );
  }
}

ClassComponent = withAppContext( ClassComponent );

function FunctionalComponent( { context } ) {
  return (
    <>
      { context.value }
    </>
  );
}

FunctionalComponent = withAppContext( FunctionalComponent );
```
