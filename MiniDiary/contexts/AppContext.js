import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();
const AppConsumer = Consumer;

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: props.fontSize,
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