# REACT Component

### Project 생성
````
$ npx react-native init component --template react-native-template-typescript
````

### App.tsx
````
 import React from 'react';
 import {
   SafeAreaView, Text
 } from 'react-native';

 import * as D from './src/data'

 const person = D.createRandomPerson()
 export default function App() {
   return <SafeAreaView>
     <Text> {JSON.stringify(person, null, 2)}</Text>
   </SafeAreaView>
 };

````
peson 은 랜덤하게 생성되는 개인 정보    

### Component 화
App 에 나오는 내용을 Component 화    
별도로 Component 파일 (ArrComponent.tsx)를 생성하고 필요한 내용을 작성 한다.   
````
import React from 'react';
import {Text} from 'react-native';
import * as D from '../data';

const person = D.createRandomPerson();

const ArrowComponent = () => {
    return <Text>{JSON.stringify(person,null,2)}</Text>
}

export default ArrowComponent
````
App.tsx 에는 Component 를 가져오는 형태로 변경 하여 준다. 
````
import ArrorComponent from './src/screens/ArrowComponent';

 export default function App() {
   return (<SafeAreaView>
     <ArrorComponent />
   </SafeAreaView>)
 };
````


### Props 를 이용한 데이터 전달
PersonProps 를 생성 하여 준다.
````
import React, {Component} from "react";
import type {FC} from 'react';
import {Text} from 'react-native';
import * as D from '../data'

export type PersonProps = {
    person: D.IPerson
}

const Person: FC<PersonProps> = ({person}) => {
    return <Text> {JSON.stringify(person, null, 2)}</Text>
}

export default Person
````
App.tsx 에서 component 로 추가 할 때 property를 추가할 수 있다.
````
const person = D.createRandomPerson()

 export default function App() {
   return (<SafeAreaView>
     <ClassComponent />
     <Person person={person} />
   </SafeAreaView>)
 };

````