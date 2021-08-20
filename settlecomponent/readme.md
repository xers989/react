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

#### flexDirection
수평으로 배치 하는 방법
`````
<View style={[styles.view]}>
    <Image style={styles.avatar} source={{uri: avatarUrl}} />
    <View style={styles.centerView}>
        <Text style={[styles.text]}>{name}</Text>
    </View>
    <Icon name="menu" size={24} color="white"/>
</View>
..
view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.amber500
},
text: {fontSize: 20, textAlign: 'center', color: 'white'},
avatar: {width: 40, height: 40, borderRadius: 20},
centerView: {flex:1}
`````
view 에 flexDirection을 row 로 하면 가로 방향으로 하위 컴포넌트가 배치 된다.
(image, view, icon 이 가로로 배치됨)
alignItem 은 left, center, right, stretch 가 가능하다.
<img src="/images/settlecomponent/screen02.png" width="20%" height="20%"> 

#### justifyContent
View 내부 컨텐츠를 배치하는 방법으로 앞쪽에서 차례로, 뒤에서 차례로, 중간에 배치, 중간 기준 공간을 가지고 배치 등 옵션을 제공 한다.
justifyContent 는 flex-start, center, flex-end, space-around, space-between, space-evnely 가 있다.
`````
const icons = ['home', 'table-search','face-profile-woman', 'account-settings'];
...
const children = icons.map ((name) => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} />
))
return (
    <View style={[styles.view]}>{children}
    </View>
)
...    
view: {
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent: 'space-evenly',
    padding: 10, backgroundColor: Colors.lightBlue500}
..

`````
배열로 지정한 아이콘을 화면 하단에 배치     
<img src="/images/settlecomponent/screen03.png" width="20%" height="20%"> 

#### Fragment 와 절대 위치
메인 화면을 나누고 절대 위치에 버튼 배치 하기, 다음 처럼 SafeAreaView 를 Fragment 로 둘러 싸준다. (<>, </> 로도 가능하다)
`````
return (
     <Fragment>
     <SafeAreaView style={styles.flex}>
       <TopBar />
       <Content />
       <BottomBar />
     </SafeAreaView>

     <View style={[styles.absoluteView]}>
         <Icon name="feather" size={50} color="white" onPress={iconPressed}/>
       </View>
     </Fragment>
   )
..

   absoluteView: {
     backgroundColor: Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios:100, android:80}),
    padding: 10,
    borderRadius: 35
  }
`````
버튼의 배치는 절대 위치로 하여 주면 다음 처럼 해당 위치에 버튼이 보여 진다.    
<img src="/images/settlecomponent/screen034png" width="20%" height="20%"> 