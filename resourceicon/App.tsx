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
   StyleSheet,
   Text,
   View, Alert,
 } from 'react-native';

 import { ImageBackground, Image } from 'react-native';
 import * as D from './src/data'
 import {Colors} from 'react-native-paper'
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
 const avatarUrl = D.randomAvatarUrl();
 const avatarSize = 50;
 const text = 'Almost bore we knew it, we had left the ground.';
 const onIconPressed = () => Alert.alert('icon pressed')

 export default function App() {
   return (
   <SafeAreaView style={ [styles.flex]}>
     <ImageBackground style= {[styles.flex, styles.imageBackground]} source={require('./src/assets/images/bg.jpg')}>
       <Image source={{uri: avatarUrl}} style={[styles.image]} />
       <View style={[styles.flex, styles.padding10]}>
         <Text style={[styles.text, styles.regular]}>{text}</Text>
         <Text style={[styles.text, styles.medium]}>{text}</Text>
         <Text style={[styles.text, styles.semiBold]}>{text}</Text>
         <Text style={[styles.text, styles.bold]}>{text}</Text>
       </View>
       <Icon name="home" size= {50} color={Colors.lightBlue500} onPress={onIconPressed}>

       </Icon>
     </ImageBackground>
   </SafeAreaView>
   )
 };

 const styles = StyleSheet.create ( {
   regular: {fontFamily: 'DancingScript-Regular'},
   medium: {fontFamily: 'DancingScript-Medium'},
   semiBold: {fontFamily: 'DancingScript-SemiBold'},
   bold: {fontFamily: 'DancingScript-Bold'},
   flex: {flex: 1},
   imageBackground: {flex: 1, padding: 10},
   image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize /2},
   padding10: {padding: 10},
   text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},
 })
