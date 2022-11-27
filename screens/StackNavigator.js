import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import UpcomingXp from './UpcomingXp'
import Echoice from './Echoice'
import Experience from './Experience'
import Signup from './Signup'
import Login from './Login'
import { AuthContext } from '../Global/AuthProvider'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateXP from './CreateXP'
const Stack = createNativeStackNavigator();


const StackNavigator = () => {

    const {user} = useContext(AuthContext)

  return (
    <Stack.Navigator screenOptions={{
        headerShown: true
      }}>
      {user ?
        (<>
          <Stack.Screen name="Upcoming Experiences" component={UpcomingXp} />
          <Stack.Screen name="Event Choice" component={Echoice} />
          <Stack.Screen name="Experience" component={Experience} />
          <Stack.Screen name="CreateXP" component={CreateXP} />
        </>)
      :
        (<>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
        </>)
    }
      
    </Stack.Navigator>
  )
}

export default StackNavigator