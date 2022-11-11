import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import {Icon} from '@rneui/themed'
import { AuthContext } from '../Global/AuthProvider'


const Login = ({navigation}) => {

    const {name, setName,email, setEmail,password, setPassword,user, handleEmailSignup, handleEmailLogin} = useContext(AuthContext)

  return (
    <KeyboardAvoidingView style={{flex:1, justifyContent:'center'}}>
        <ImageBackground source={{uri:"https://assets.wallpapersin4k.org/uploads/2017/04/Travel-Wallpaper-App-10.jpg"}} 
            resizeMethod="auto" style={{flexDirection:"row",flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{backgroundColor:"#fff", width:"96%", position:"absolute", bottom:0, height:450, borderTopStartRadius:10, borderTopEndRadius:10,flexDirection:"column",flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>
                    Welcome back Msafiri!
                </Text>
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
                    <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={async()=>{await handleEmailLogin();
                                                                                                                                                                navigation.navigate("Upcoming Experiences")}}>
                        <View  style={{width:'70%', backgroundColor:'#00AAF8', borderRadius:10, paddingVertical:10, }}>
                            <Text style={{textAlign:'center'}} >Login</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={()=>{navigation.navigate("Signup")}}>
                        <View style={{width:'70%', backgroundColor:'#AAB624', borderRadius:10, paddingVertical:10, }}>
                            <Text style={{textAlign:'center'}}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({

})