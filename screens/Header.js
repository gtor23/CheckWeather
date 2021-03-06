import * as React from 'react';
import { Appbar, Title } from 'react-native-paper'; //importing react-native-paper components
import {View, Text} from 'react-native' //importing react native components

const Header = () => {

    let appName = 'Check Weather'

  return (
    <Appbar.Header theme = {{colors:{primary: '#00aaff'}}}>
        <Title style = {{color: 'white'}}> {appName} </Title>
    </Appbar.Header>
  );
};

export default Header;