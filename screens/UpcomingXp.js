import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Global/AuthProvider'
import { HomeData } from '../components/HomeData'
import tw from 'twrnc';
import { useEffect } from 'react';
import { ExperienceContext } from '../Global/ExperienceProvider';

const UpcomingXp = ({navigation}) => {
  const {user, Logout} = useContext(AuthContext)
  const {getAllExperiences, data,
    experience_description,setExperienceDescription,
    experience_name, setExperienceName,
    experience_price, setExperiencePrice,
    destination, setDestination,
    departure, setDeparture,
    pickup, setPickup,
    poster, setPoster,
    pickImage
  } = useContext(ExperienceContext)

  useEffect(() => {
    getAllExperiences()
  }, [])
  

  console.log(user)
  return (
      <SafeAreaView style={{flex:1}}>
          <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={async()=>{navigation.navigate("CreateXP")}}>
              <View  style={{width:'70%', backgroundColor:'#00AAF8', borderRadius:10, paddingVertical:10, }}>
                  <Text style={{textAlign:'center'}} >Create Experience</Text>
              </View>
          </TouchableOpacity>
      </SafeAreaView>
  )
}

export default UpcomingXp

const styles = StyleSheet.create({})