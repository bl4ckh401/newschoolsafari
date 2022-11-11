import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';


const Echoice = ({navigation}) => {
  return (
    <SafeAreaView style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', marginTop:10}}>CHOOSE YOUR EXPERIENCE</Text>
      <View style={{width:'70%', justifyContent:'space-evenly', alignItems:'center', flexDirection:'row', marginTop:10}}>
      <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={async()=>{navigation.navigate('Event Choice')}}>
        <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center' }}>
            <Image source={{ uri: "https://www.shutterstock.com/image-illustration/abstract-laser-tag-poster-flyer-600w-250928917.jpg" }} style={{ height: 150, width: 150, }} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={async()=>{navigation.navigate('Event Choice')}}>
        <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center' }}>
            <Image source={{ uri: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b1678568130765.5b51e55f175f0.jpg" }} style={{ height: 150, width: 150, }} />
        </View>
      </TouchableOpacity>
      </View>
      <View style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}}>
        <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={async()=>{}}>
            <View  style={{width:'70%', backgroundColor:'#00AAF8', borderRadius:10, paddingVertical:10, }}>
                <Text style={{textAlign:'center'}} >Vote For 1st XP</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={async()=>{}}>
            <View  style={{width:'70%', backgroundColor:'#00AAF8', borderRadius:10, paddingVertical:10, }}>
                <Text style={{textAlign:'center'}} >Vote For 2nd XP</Text>
            </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Echoice

const styles = StyleSheet.create({})