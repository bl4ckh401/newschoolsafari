import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Global/AuthProvider'
import { HomeData } from '../components/HomeData'
import tw from 'twrnc';

const UpcomingXp = ({navigation}) => {
  const {user, Logout} = useContext(AuthContext)

  console.log(user)
  return (
      <SafeAreaView style={{flex:1}}>
        <FlatList 
          style={{}} 
          data={HomeData}
          keyExtractor={(item) => item.id}
          ListFooterComponent={()=>{
            return(
              <>
              <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={async()=>{await Logout(); navigation.navigate("Login")}}>
                  <View  style={{width:'70%', backgroundColor:'#00AAF8', borderRadius:10, paddingVertical:10, }}>
                      <Text style={{textAlign:'center'}} >Sign Out</Text>
                  </View>
              </TouchableOpacity>
              </>
            )
          }}
          ItemSeparatorComponent={() => {
              return (
                  <View style={{ height: 25 }} />
              )
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={async()=>{navigation.navigate('Event Choice')}}>
                <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                    <Image source={{ uri: item.image_uri }} style={{ height: 300, width: 300, }} />
                    <View style={{ width: 300, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, backgroundColor: '#00AAF8', color: '#F49401' }}>
                        <Text style={{ color: 'white', padding:10 }}>{item.description}</Text>
                    </View>
                </View>
                </TouchableOpacity>
            )
        }}/>
      </SafeAreaView>
  )
}

export default UpcomingXp

const styles = StyleSheet.create({})