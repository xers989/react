# react


#### Scope 설치
PowerShell 을 관리자로 실행 후 다음을 설정
````
C:\Windows\system32> Set-ExecutionPolicy RemoteSigned -scope CurrentUser

실행 규칙 변경
실행 정책은 신뢰하지 않는 스크립트로부터 사용자를 보호합니다. 실행 정책을 변경하면 about_Execution_Policies 도움말
항목(https://go.microsoft.com/fwlink/?LinkID=135170)에 설명된 보안 위험에 노출될 수 있습니다. 실행 정책을
변경하시겠습니까?
[Y] 예(Y)  [A] 모두 예(A)  [N] 아니요(N)  [L] 모두 아니요(L)  [S] 일시 중단(S)  [?] 도움말 (기본값은 "N"): A
PS C:\Windows\system32>
````

환경변수 추가
<img src="/images/envset01.PNG" width="70%" height="70%">  

````
PS > iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
Initializing...
Downloading scoop...
Extracting...
Creating shim...
Downloading main bucket...
Extracting...
Adding C:\cloudwork\scoop\shims to your path.
'lastupdate' has been set to '2021-08-06T01:24:01.7318579+09:00'
Scoop was installed successfully!
Type 'scoop help' for instructions.
````

scoop 폴더에 설치가 완료됨 (apps, buckets, shims 폴더 생성)

```
PS > npm i -g typescript ts-node
```

Android-studio  설치   
Android-Studio 사이트에서 다운로드 설치   

Java Runtime 설치

JAVA_HOME 설정    
<img src="/images/envset02.PNG" width="70%" height="70%">  

ADNROID_HOME 설정    
<img src="/images/android-studio.PNG" width="80%" height="80%">  

Android Studio > Tools > AVD manager 에서 Virtual Device 설치    
<img src="/images/android-studio2.PNG" width="90%" height="90%">  


License Agreement
````
PS > %ANDROID_HOM%\Android\Sdk\tools\bin\sdkmanager.bat --licenses
````

프로젝트 생성
````
PS > npx react-native init project_name --template react-native-template-typescript
````
프로젝트 시간이 몇분 걸림    
<img src="/images/hello-world.PNG" width="70%" height="70%">  

