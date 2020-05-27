import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Store from './src/Store'
import { Header, CryptoContainer } from './src/components'
// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension' 

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {Store}>
          <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
     
    )
  }
}
