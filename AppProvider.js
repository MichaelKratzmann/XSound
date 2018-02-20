import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';


class AppProvider extends Component {
  componentWillMount() {
    persistStore(this.props.store, {
      storage: AsyncStorage,
    }, this.props.callback);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        {this.props.children}
      </Provider>
    );
  }
}
export default AppProvider;
