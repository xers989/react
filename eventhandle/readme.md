## Event 처리

### 초기화
````
$ npx react-native init eventhandle --template react-native-template-typescript
````

````
import React from 'react';
import {
  SafeAreaView, Alert, Button
} from 'react-native';

export default function App() {
  return (<SafeAreaView>
    <Button title='Home' onPress={()=> Alert.alert('Home pressed.', 'message')} />
  </SafeAreaView>
  )
};
````

### Button

import {Button} from 'react-native'
<Button onPress={callback_function}>
callback_function = () => {...}


### Alert

import {Alert} from 'react-native'
static alert ('title', 'message')

### TouchableOpacity, TouchableHighlight
````
<TouchableOpacity onPress={onPress}>
    <Text>TouchableOpacity</Text>
</TouchableOpacity>
<TouchableHighlight onPress={onPress}>
    <Text>TouchableHighlight</Text>
</TouchableHighlight>
````

### TextInput
일반 텍스트를 입력 할 수 있는 형태로 이벤트를 이용하여 데이터 변경을 가져 올 수 있다.    
````
import {TextInput} from 'react-native'

..
<TextInput placeholder="Enter you name"
      onChangeText={(text: string) => console.log(text)}
      onFocus= { () => console.log('onFocus')}
      onBlur = {() => console.log('onBlur')}
      onEndEditing = { () => console.log('onEndEditing')}
/>
````