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
   SafeAreaView
 } from 'react-native';
import ArrorComponent from './src/screens/ArrowComponent';

import ClassComponent from './src/screens/ClassComponent';
import Person from './src/screens/Person';
import * as D from './src/data'

const person = D.createRandomPerson()

 export default function App() {
   return (<SafeAreaView>
     <ClassComponent />
     <Person person={person} />
   </SafeAreaView>)
 };
