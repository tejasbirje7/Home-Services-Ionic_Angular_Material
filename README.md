# Home-Services-Ionic_Angular_Material

:crystal_ball: Progressive web app(PWA) based on Ionic and Angular material


**INSTALL**

```bash
npm install
```

**APK GENERATION REQUIREMENTS**

```bash
- Java 8
- Android SDK Tools
- Cordova
- Graddle
```


**SAMPLE APK PATH**

```
- platforms/android/build/outputs/apk/HomeServices.apk
```


**STEPS TO GENERATE APK**

```
- Check JAVA_HOME is set to JDK 8 [ echo $JAVA_HOME ]

- Check ANDROID_SDK_ROOT is set to android-sdk/tools [ echo $ANDROID_SDK_ROOT ]

- Generate a release build for Android. This will generate a release build based on the settings in your config.xml
  - $ ionic cordova build --release android
  
- Unsigned APK gets created at following location
  - platforms/android/build/outputs/apk/<APK_NAME>.apk

- Let’s generate our private key using the keytool command that comes with the JDK
  - $ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
  
- To sign the unsigned APK, run the jarsigner tool which is also included in the JDK
  - jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/build/outputs/apk/<APK_NAME>.apk alias_name

- This signs the apk in place. Finally, we need to run the zip align tool to optimize the APK (move to direcctory where apk is present)
  - zipalign -v 4 <APK_NAME>.apk <CHOICE_NAME_TO_YOUR_APK>.apk
  
```

**TODO**

```
- Implement Online Shopping Screen under SHOP navigator
- Implement functionality to hire a choice based proffessional under PROFFESSIONAL navigator
- Implement contact us with address and maps under HELP navigator
```


**SCREENSHOTS**

<img src="https://user-images.githubusercontent.com/22116109/64062199-5daa8280-cc01-11e9-866a-b13202ef14b4.png" width="230" height="420"> <img src="https://user-images.githubusercontent.com/22116109/64062173-13c19c80-cc01-11e9-89d9-c791bdb4a004.png" width="230" height="420">
<img src="https://user-images.githubusercontent.com/22116109/64062176-1623f680-cc01-11e9-9499-b65799754794.png" width="230" height="420">
<img src="https://user-images.githubusercontent.com/22116109/64062178-17edba00-cc01-11e9-9489-2766c261ea35.png" width="230" height="420">
<img src="https://user-images.githubusercontent.com/22116109/64062179-191ee700-cc01-11e9-9b27-ebd39555a930.png" width="230" height="420">
