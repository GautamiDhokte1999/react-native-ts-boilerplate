import Startup from '@/Containers/Startup'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView } from 'react-native'
import MainNavigator from './Main'
import { styles } from './style'

const Stack = createStackNavigator()

const ApplicationNavigator = () => (
  <SafeAreaView style={styles.safeAreaStyle}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="MainNav" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
)

export default ApplicationNavigator
