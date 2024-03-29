import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import AuthProvider, { AuthContext } from './Global/AuthProvider';
import StackNavigator from './screens/StackNavigator';
import ExperienceProvider, { ExperienceContext } from './Global/ExperienceProvider';

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <ExperienceProvider>
            <StackNavigator/>
          </ExperienceProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
