## iOS
````
$ sudo npm uninstall -g react-native-cli
$ sudo sudo npm i -g @react-native-community/cli
$ npx react-native init resourceproject --template react-native-template-typescript
````


#### Style - inline
````
<SafeAreaView style={[{backgroundColor: 'blue'}]}>
    <Text style={[{color: 'white'}]}>Hello World</Text>
</SafeAreaView>
````

#### StyleSheet
사전에 다음과 같이 styles 를 생성 하고 컴포넌트의 style 에 이를 사용 한다.  
````
 const styles = StyleSheet.create(
   {
     safeAreaView: {flex:1, alignItems: 'center', justifyContent: 'center'},
     text: {fontSize: 20}
   }
 )
 ````

컴포넌트에서 사용
````
<SafeAreaView style={[styles.safeAreaView, {backgroundColor: 'blue'}]}>
    <Text style={[styles.text, {color: 'white'}]}>Hello World by StyleSheet</Text>
</SafeAreaView>
````

#### react-native-paper package
구글 머티리얼 디자인 가이드라인에 따른 색상표
````
> npm i react-native-vector-icons react-native-paper
> npm i color
> npm i -D @types/color

import {Platform, Dimensions} from 'react-native'
import {Colors} from 'react-native-paper'
import color from 'color'

const {width, height} = Dimensions.get('window');
 export default function App() {
   return (
     <SafeAreaView style={[styles.safeAreaView]}>
       <Text style={[styles.text]}>os : {Platform.OS}</Text>
       <Text style={[styles.text]}>width : {width} px</Text>
       <Text style={[styles.text]}>height : {height} px</Text>
     </SafeAreaView>
   )

 };

 const styles = StyleSheet.create(
   {
     safeAreaView: {flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.blue500},
     text: {fontSize: 20, color: color(Colors.blue500).lighten(0.9).string() }
   }
 )
````
<img src="/images/resourceproject/screen01.png" width="40%" height="40%">   


#### Margin, Padding  & View
View 계열은 height, width를 backgroundColor를 가질 수 있다. iOS와 android의 padding 에 대한 작동이 다른 것을 유의해야 함. 
Component의 margin은 자신과 부모 혹은 동등 레벨과의 떨어지는 거리를 의미함. border는 컴포넌트의 둘레에 대한 속성이며 Padding 은 부모/자신간의 관계에서 나타나는 것으로 부모와 자식간의 공백 영역을 의미 한다.    
````
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

safeAreaView: {backgroundColor: Colors.blue500, flex: 1, padding: 10},
text: {fontSize: 20, color: color(Colors.blue500).lighten(0.9).string() },
margintext: {fontSize: 20, marginBottom:30, marginLeft:30, color: color(Colors.blue500).lighten(0.9).string() },
box: {height: 100, backgroundColor: Colors.lime500, marginBottom: 10},
border: {borderWidth: 10, borderColor: color('black').apple(0.3).string()},
viewtext: {fontSize: 14, color: 'black'},
````
<img src="/images/resourceproject/screen02.png" width="40%" height="40%">   