import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Global/AuthProvider'

const UpcomingXp = ({navigation}) => {
  const {user, Logout} = useContext(AuthContext)

  console.log(user)
  return (
    <SafeAreaView>
      <View><Text>{user.headers}</Text></View>
      <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={()=>{Logout(); navigation.navigate("Login")}}>
          <View  style={{width:'70%', backgroundColor:'#00AAF8', borderRadius:10, paddingVertical:10, }}>
              <Text style={{textAlign:'center'}} >Sign Out</Text>
          </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default UpcomingXp

const styles = StyleSheet.create({})