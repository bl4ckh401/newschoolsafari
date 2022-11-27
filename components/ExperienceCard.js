import { View, Text } from 'react-native'
import React from 'react'

const ExperienceCard = () => {
    return (
        <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:10}} onPress={async()=>{navigation.navigate('Event Choice')}}>
          <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center' }}>
              <Image source={{ uri: item.image_uri }} style={{ height: 300, width: 300, }} />
              <View style={{ width: 300, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, backgroundColor: '#00AAF8', color: '#F49401' }}>
                  <Text style={{ color: 'white', padding:10 }}>{item.experience_description}</Text>
              </View>
          </View>
          </TouchableOpacity>
      )
}

export default ExperienceCard