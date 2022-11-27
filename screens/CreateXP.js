import { View, Button, Text, KeyboardAvoidingView, Image, ImageBackground, TextInput, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web'
import ExperienceProvider,{ ExperienceContext } from '../Global/ExperienceProvider'
import { useContext } from 'react'
import { Icon } from '@rneui/themed'

const CreateXP = ({navigation}) => {
    const {
        experience_description,setExperienceDescription,
        experience_name, setExperienceName,
        experience_price, setExperiencePrice,
        destination, setDestination,
        departure, setDeparture,
        pickup, setPickup,
        poster, setPoster,
        pickImage
    } = useContext(ExperienceContext)
  return (
        <KeyboardAvoidingView style={{flex:1, justifyContent:'center'}}>
                <ImageBackground source={{uri:"https://assets.wallpapersin4k.org/uploads/2017/04/Travel-Wallpaper-App-10.jpg"}} 
                    resizeMethod="auto" style={{flexDirection:"row",flex:1, justifyContent:'center', alignItems:'center'}}>
                    <View style={{backgroundColor:"#fff", width:"96%", position:"absolute", bottom:0, height:650, borderTopStartRadius:10, borderTopEndRadius:10,flexDirection:"column",flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>
                            CREATE AN EXPERIENCE
                        </Text>
                        <View style={{borderBottomColor:'black', borderBottomWidth:3}}/>
                        <View style={{width:"96%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Icon name='email' type='material' size={40} color='black'/>
                            <TextInput style={{height:80, width:"90%", padding:10, textAlign:'left'}} placeholder="Experience Name" name="experience_name" value={experience_name} onChangeText={text => setExperienceName(text)}/>
                        </View>
                        <View style={{borderBottomColor:'black', borderBottomWidth:3}}/>
                        <View style={{width:"96%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Icon name='lock' type='material' size={40} color='black'/>
                            <TextInput style={{height:80, width:"90%", padding:10, textAlign:'left'}} placeholder="Experience Price" name="experience_price" value={experience_price} onChangeText={text => setExperiencePrice(text)}/>
                        </View>
                        <View style={{borderBottomColor:'black', borderBottomWidth:3}}/>
                        <View style={{width:"96%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Icon name='email' type='material' size={40} color='black'/>
                            <TextInput style={{height:80, width:"90%", padding:10, textAlign:'left'}} placeholder="Destination" name="destination" value={destination} onChangeText={text => setDestination(text)}/>
                        </View>
                        <View style={{borderBottomColor:'black', borderBottomWidth:3}}/>
                        <View style={{width:"96%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Icon name='lock' type='material' size={40} color='black'/>
                            <TextInput style={{height:80, width:"90%", padding:10, textAlign:'left'}} placeholder="Pickup Location" name="pickup" value={pickup} onChangeText={text => setPickup(text)}/>
                        </View>
                        <View style={{borderBottomColor:'black', borderBottomWidth:3}}/>
                        <View style={{width:"96%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Icon name='email' type='material' size={40} color='black'/>
                            <TextInput style={{height:80, width:"90%", padding:10, textAlign:'left'}} placeholder="Departure Time" name="departure" value={departure} onChangeText={text => setDeparture(text)}/>
                        </View>
                        <View style={{borderBottomColor:'black', borderBottomWidth:3}}/>
                        <View style={{width:"96%", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Icon name='lock' type='material' size={40} color='black'/>
                            <TextInput style={{height:80, width:"90%", padding:10, textAlign:'left'}} placeholder="Experience Description" name="experience_description" value={experience_description} onChangeText={text => setExperiencePrice(text)}/>
                        </View>
                        <View style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                        {poster && <Image source={{ uri: poster }} style={{ width: 200, height: 200 }} />}
                            <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={()=>{pickImage()}}>
                                    <View style={{width:'70%', backgroundColor:'#AAB624', borderRadius:10, paddingVertical:10, }}>
                                        <Text style={{textAlign:'center'}}>Upload Poster</Text>
                                    </View>
                            </TouchableOpacity>
                            <View style={{borderBottomColor:'black', borderBottomWidth:3}}/>
                            <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={()=>{}}>
                                <View style={{width:'70%', backgroundColor:'#AAB624', borderRadius:10, paddingVertical:10, }}>
                                    <Text style={{textAlign:'center'}}>Create Experience</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
  )
}

export default CreateXP