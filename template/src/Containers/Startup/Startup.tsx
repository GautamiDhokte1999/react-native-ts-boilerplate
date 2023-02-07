import { screenHeight, screenWidth } from '@/Utils/styles'
import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { Button } from 'react-native-paper'
import { styles } from './styles'
import { NavigationProps } from './types'

const Startup: FC = () => {
  const navigatation = useNavigation<NavigationProps>()

  return (
    <View style={styles.logoView}>
      <Image
        resizeMode="contain"
        source={require('../../Assets/logo.png')}
        style={{ width: screenWidth * 0.6, height: screenHeight * 0.3 }}
      />
      <Button mode="contained" onPress={() => navigatation.navigate('MainNav')}>
        Let's Get Started
      </Button>
    </View>
  )
}

export default Startup
