import { Tab1, Tab2 } from '@/Containers'
import { Colors } from '@/Theme'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React, { useCallback } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GetTabIconFn, styles } from './style'
const Tab = createMaterialBottomTabNavigator()

// @refresh reset
const TabNavigator = () => {
  const getTabIcon = useCallback<GetTabIconFn>((name, icon) => {
    switch (name) {
      case 'Tab1':
        return (
          <Icon
            name={icon.focused ? 'tag' : 'tag-outline'}
            color={icon.color}
            size={24}
          />
        )
      case 'Tab2':
        return <Icon name="swap-horizontal" color={icon.color} size={24} />

      default:
        return null
    }
  }, [])

  return (
    <Tab.Navigator barStyle={[styles.barStyle]} activeColor={Colors.primary}>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarIcon: iconProps => getTabIcon('Products', iconProps),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarIcon: iconProps => getTabIcon('Shipments', iconProps),
        }}
      />
    </Tab.Navigator>
  )
}
export default TabNavigator
