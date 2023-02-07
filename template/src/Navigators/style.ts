import { StyleSheet } from 'react-native'

import { BorderWidth, Colors } from '@/Theme'
export interface IconProps {
  focused: boolean
  color: string
}
export type GetTabIconFn = (
  name: string,
  iconProps: IconProps,
) => React.ReactNode

export const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
  },
  barStyle: {
    backgroundColor: Colors.background,
    borderTopWidth: BorderWidth.divider,
    borderColor: Colors.divider,
  },
})
