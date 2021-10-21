/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Search} from './screens'
const App = () => {

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor = "#00aaff"/>
      <Search />

    </>
  );
};


export default App;
