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
        <FlatList data={data}
        keyExtractor={id=>id}
        ItemSeparatorComponent={() => {
          return(
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 3 }} />
        )}}
        renderItem={(item) => {
          return (
            <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 10 }} onPress={async () => { navigation.navigate('Event Choice') }}>
              <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                <Image source={{ uri: item.image_uri }} style={{ height: 300, width: 300, }} />
                <View style={{ width: 300, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, backgroundColor: '#00AAF8', color: '#F49401' }}>
                  <Text style={{ color: 'white', padding: 10 }}>{item.experience_description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
        ListFooterComponent={() => {
          return(
            <>
              <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 10 }} onPress={async () => { navigation.navigate("CreateXP") }}>
                <View style={{ width: '70%', backgroundColor: '#00AAF8', borderRadius: 10, paddingVertical: 10, }}>
                  <Text style={{ textAlign: 'center' }} >Create Experience</Text>
                </View>
              </TouchableOpacity>
            </>
          )
        }}/>
      </SafeAreaView>
  )
}

export default UpcomingXp

const styles = StyleSheet.create({})