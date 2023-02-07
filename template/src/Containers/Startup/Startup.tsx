import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { NavigationProps } from './types'

const Startup: FC = () => {
  const navigatation = useNavigation<NavigationProps>()

  return (
    <View>
      <Text>Your Login/Signup screens</Text>
      <Button onPress={() => navigatation.navigate('MainNav')}>
        Inside App
      </Button>
    </View>
  )
}

export default Startup
