## Component 배치

#### init project

`````
j$ npm i react-native-vector-icons react-native-paper color faker
$ npm i -D @types/react-native-vector-icons @types/color @types/faker
$ npx react-native link react-native-vector-icons 
..
info Linking assets to android project
success Assets have been successfully linked to your project
# iOS only
$ npx pod-install
`````
<img src="/images/settlecomponent/screen01.png" width="20%" height="20%"> 


#### flex
3 개의 View 가 있으며 각각 flex: # 으로 style 이 정해져 있다.   
flex는 여분의 공간에 대해서 비율을 의미 하기 때문에 flex1, flex2 가 1/3, 2/3 의 공간을 차기 하게 된다.
`````
viewred: {flex:0, backgroundColor: Colors.red500},
viewgreen: {flex:1, backgroundColor: Colors.green500},
viewpurple: {flex:2, backgroundColor: Colors.purple500},

...
<View style={[styles.viewred]}>
    <Text>flex: 0</Text>
</View>
<View style={[styles.viewgreen]}>
    <Text>flex: 1</Text>
</View>
<View style={[styles.viewpurple]}>
    <Text>flex: 2</Text>
</View>
`````