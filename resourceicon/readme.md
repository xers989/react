## Resource & ICON

#### Project & module 설치
````
$ npx react-native init resourceicon --template react-native-template-typescript
$ npm i react-native-vector-icons react-native-paper color faker 
$ npm i -D @types/color @types/faker @types/react-native-vector-icons
````


#### Backgroup image 설정
배경으로 사용할 이미지를 폴더에 복사 하여 준다.
````
import { ImageBackground } from 'react-native';
..
<SafeAreaView style={ [styles.flex]}>
     <ImageBackground style= {[styles.flex, styles.imageBackground]} source={require('./src/assets/images/bg.jpg')}>
     </ImageBackground>
</SafeAreaView>
..
const styles = StyleSheet.create ( {
   flex: {flex: 1},
   imageBackground: {flex: 1, padding: 10},
 })
````
source 에 base64 endcode string 을 바로 줄 수도 있다.


#### Image 추가 하기
이미지를 추가 하며 보여주기
````
import { ImageBackground, Image } from 'react-native';
..
const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50;
..
<ImageBackground style= {[styles.flex, styles.imageBackground]} source={require('./src/assets/images/bg.jpg')}>
       <Image source={{uri: avatarUrl}} style={[styles.image]} />
     </ImageBackground>
..
const styles = StyleSheet.create ( {
   imageBackground: {flex: 1, padding: 10},
   image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize /2},
 })
````
avatar 로 사용할 이미지 url을 가져와 보여주기

#### Font 추가 하기
Font 를 추가하고 이를 native 로 이를 설치 해주어야 한다.   
설치는 react-native.config 파일을 이용하여 진행 한다.
````
module.exports = {
    project: {
        ios: {},
        android: {},
    },
    assets: ['./src/assets/fonts'],
}
````
/src/assets/fonts 에 있는 파일을 native로 설치 하여 준다.
실제 설치는 
`````
$ npx react-native link
`````
native (ios/android)의 폴더에 fonts 가 설치 된다.    
fonts style 정의

`````
 <View style={[styles.flex, styles.padding10]}>
    <Text style={[styles.text, styles.regular]}>{text}</Text>
    <Text style={[styles.text, styles.medium]}>{text}</Text>
    <Text style={[styles.text, styles.semiBold]}>{text}</Text>
    <Text style={[styles.text, styles.bold]}>{text}</Text>
 </View>
 ...      
 const styles = StyleSheet.create ( {
   regular: {fontFamily: 'DancingScript-Regular'},
   medium: {fontFamily: 'DancingScript-Medium'},
   semiBold: {fontFamily: 'DancingScript-SemiBold'},
   bold: {fontFamily: 'DancingScript-Bold'},
   text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},
   ...
 })
`````

#### ICON 추가 하기
아이콘 추가 하기
`````
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 ...
 const onIconPressed = () => Alert.alert('icon pressed')
...
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
`````
Home 이라는 아이콘이 추가 되며 클릭시 onPress 에 의해 Alert 화면이 보여 진다.

<img src="/images/resourceicon/screen01.png" width="20%" height="20%">  