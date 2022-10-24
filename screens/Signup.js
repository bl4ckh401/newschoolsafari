import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import {Icon} from '@rneui/themed'
import * as WebBrowser from 'expo-web-browser';
import { AuthContext } from '../Global/AuthProvider'
import * as Google from 'expo-auth-session/providers/google'

WebBrowser.maybeCompleteAuthSession();
const Signup = ({navigation}) => {

    const {name, setName,email, setEmail,password, setPassword,user,setUser, handleEmailSignup, googleLogin} = useContext(AuthContext)

    const [request, response, googlePromptAsync] = Google.useAuthRequest({
        expoClientId: '375490911063-nvualr5phoa0l5tjct92dlsq8hlm70t6.apps.googleusercontent.com',
        iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
      });
    const googleRegister = async()=>{
        const response = await googlePromptAsync();
        if(response.type==='success'){
            const {access_token} = response.params
            console.log(access_token)
            setUser(await googleLogin(access_token))
            if(user){
                console.log('Login Successful')
            }
        }
        }
    

  return (
    <KeyboardAvoidingView style={{flex:1, justifyContent:'center'}}>
        <ImageBackground source={{uri:"https://assets.wallpapersin4k.org/uploads/2017/04/Travel-Wallpaper-App-10.jpg"}} 
            resizeMethod="auto" style={{flexDirection:"row",flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{backgroundColor:"#fff", width:"96%", position:"absolute", bottom:0, height:450, borderTopStartRadius:10, borderTopEndRadius:10,flexDirection:"column",flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>
                    Welcome back Msafiri!
                </Text>
                <View style={{width:"96%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Icon name='badge' type='material' size={40} color='black'/>
                    <TextInput style={{height:80, width:"90%", padding:10, textAlign:'left'}} placeholder="Your Name" name="name" value={name} onChangeText={text => setName(text)}/>
                </View>
                <View style={{borderBottomColor:'black', borderBottomWidth:3}}/>
                <View style={{width:"96%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Icon name='email' type='material' size={40} color='black'/>
                    <TextInput style={{height:80, width:"90%", padding:10, textAlign:'left'}} placeholder="Your Email" name="email" value={email} onChangeText={text => setEmail(text)}/>
                </View>
                <View style={{borderBottomColor:'black', borderBottomWidth:3}}/>
                <View style={{width:"96%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Icon name='lock' type='material' size={40} color='black'/>
                    <TextInput style={{height:80, width:"90%", padding:10, textAlign:'left'}} placeholder="Your Password" name="password" value={password} onChangeText={text => setPassword(text)}/>
                </View>
                <View style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={()=>{handleEmailSignup(); 
                                                                                                                                                                navigation.navigate("Upcoming Experiences")}}>
                        <View  style={{width:'70%', backgroundColor:'#00AAF8', borderRadius:10, paddingVertical:10, }}>
                            <Text style={{textAlign:'center'}} >Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={()=>{navigation.navigate("Login")}}>
                        <View style={{width:'70%', backgroundColor:'#AAB624', borderRadius:10, paddingVertical:10, }}>
                            <Text style={{textAlign:'center'}}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={()=>{googleRegister()}}>
                        <View style={{width:'70%', backgroundColor:'#AAB624', borderRadius:10, paddingVertical:10, }}>
                            <Text style={{textAlign:'center'}}>Sign Up With Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default Signup

const styles = StyleSheet.create({

})