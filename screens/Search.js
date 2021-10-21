import * as React from 'react';
import { Appbar, Title } from 'react-native-paper'; //importing react-native-paper components
import {View, Text} from 'react-native' //importing react native components
import {Header} from './index'

const Search = () => {


  return (
    <View style = {{flex:1}}>
        <Header />
        <Text>Search Screen</Text>
    </View>
  );
};

export default Search;