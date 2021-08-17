/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, Alert, Button, TouchableHighlightBase
} from 'react-native';

import { TouchableOpacity, TouchableHighlight, Text } from 'react-native';

import {TextInput} from 'react-native';

const onPress = () => Alert.alert('home pressed', 'message')

export default function App() {
  return (<SafeAreaView>
    <Button title='Home' onPress={onPress} />
    <TouchableOpacity onPress={onPress}>
      <Text>TouchableOpacity</Text>
    </TouchableOpacity>
    <TouchableHighlight onPress={onPress}>
      <Text>TouchableHighlight</Text>
    </TouchableHighlight>
    <TextInput placeholder="Enter you name"
      onChangeText={(text: string) => console.log(text)}
      onFocus= { () => console.log('onFocus')}
      onBlur = {() => console.log('onBlur')}
      onEndEditing = { () => console.log('onEndEditing')}
    />
  </SafeAreaView>
  )
};
