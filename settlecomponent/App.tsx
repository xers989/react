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
   SafeAreaView,
   StyleSheet
 } from 'react-native';

 import {Colors} from 'react-native-paper';
 import TopBar from './src/copy/TopBar';
 import Content from './src/copy/Content';
 import BottomBar from './src/copy/BottomBar';

 

 const styles = StyleSheet.create({
   flex: {flex: 1, backgroundColor: Colors.lightBlue100}
 });

 export default function App() {
   return (
     <SafeAreaView style={styles.flex}>
       <TopBar />
       <Content />
       <BottomBar />
     </SafeAreaView>
   )
 };
