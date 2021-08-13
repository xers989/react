# react hello world

#### project 생성
프로젝트 생성
````
PS > npx react-native init hello_world --template react-native-template-typescript
````
프로젝트 시간이 몇분 걸림     
<img src="/images/hello-world.PNG" width="70%" height="70%">  


#### App.tsx 변경
생성된 초기 페이지를 변경 하여줌
/App.tsx 파일을 다음과 같이 변경 하여줌   
````
 import React from 'react';
 import {Text} from 'react-native';

 export default function App() {
   const textElement = React.createElement(Text, null, 'Hello World!');
   return textElement;
 };
````

#### Running Android
안드로이드 시작
````
PS > cd .\hello_world
PS hello_world > npm run android
````
<img src="/images/hello_world/luancher.PNG" width="30%" height="30%">  
