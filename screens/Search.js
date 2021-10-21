import React, {useState} from 'react';
import axios from 'axios'
import { TextInput, Button} from 'react-native-paper'; //importing react-native-paper components
import {View, Text} from 'react-native' //importing react native components
import {Header} from './index'

const Search = () => {
    const [city, setCity] = useState('');
    const [cities, setCities] = useState([]);

    const fetchCities = (text) => {
        setCity(text);
    }

  return (
    <View style = {{flex:1}}>
        <Header />
        <TextInput 
        label='City Name' 
        theme= {{colors:{primary:'#00aaff'}}}
        value = {city}
        onChangeText = {(text) => fetchCities(text)}
        />
        
        <Button
        icon = 'content-save'
        mode = 'contained'
        theme = {{colors: {primary:'#00aaff'}}}
        style = {{margin:20}}
        onPress = {() => console.log('Pressed')}>
            <Text style = {{color: 'white'}}> Press Me </Text>
        </Button>
    </View>


  );
};

export default Search;