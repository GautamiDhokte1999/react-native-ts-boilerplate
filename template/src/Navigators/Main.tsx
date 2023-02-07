import { InsideTab1 } from '@/Containers/Tab1'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator()

const MainNav = () => (
  <Stack.Navigator initialRouteName="Home">
    {/* bottom tab is initial stack screen */}
    <Stack.Screen
      name="Home"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    {/* Tab1 routes */}
    <Stack.Screen
      name="InsideTab1"
      component={InsideTab1}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default MainNav
