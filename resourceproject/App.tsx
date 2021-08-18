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
   Text,
   StyleSheet,
   View,
 } from 'react-native';
import {Platform, Dimensions} from 'react-native'
import {Colors} from 'react-native-paper'
import color from 'color';

const {width, height} = Dimensions.get('window');


 export default function App() {
   return (
     <SafeAreaView style={[styles.safeAreaView]}>
       <Text style={[styles.text]}>Child item</Text>
       <Text style={[styles.text]}>os : {Platform.OS}</Text>
       <Text style={[styles.margintext]}>Margin Text (bottom 30, left 30)</Text>
       <Text style={[styles.text]}>width : {width} px</Text>
       <Text style={[styles.text]}>height : {height} px</Text>
       <View style={[styles.box, styles.border]}>
         <Text style={[styles.viewtext]}>Text in View</Text>
       </View>
       <View style={[styles.box, styles.border, {borderRadius:20}]} />
       <View style={[styles.box, styles.border, {borderTopLeftRadius:40, borderBottomLeftRadius:40}]} />
     </SafeAreaView>
   )

 };

 const styles = StyleSheet.create(
   {
     safeAreaView: {backgroundColor: Colors.blue500, flex: 1, padding: 10},
     text: {fontSize: 20, color: color(Colors.blue500).lighten(0.9).string() },
     margintext: {fontSize: 20, marginBottom:30, marginLeft:30, color: color(Colors.blue500).lighten(0.9).string() },
     box: {height: 100, backgroundColor: Colors.lime500, marginBottom: 10},
     border: {borderWidth: 10, borderColor: color('black').apple(0.3).string()},
     viewtext: {fontSize: 14, color: 'black'},
   }
 )