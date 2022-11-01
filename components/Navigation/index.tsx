import { CompositeNavigationProp } from '@react-navigation/native'
import React, { FC } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'

// Props
type TNavItem = {
  displayName: string;
  path: string;
  navigation: CompositeNavigationProp<any, any>
}

const NavItem: FC<TNavItem> = ({ displayName, path, navigation }) => {
  const onPress = () => {
    navigation.navigate(path)
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{displayName}</Text>
    </TouchableOpacity>
  )
}

const Navigation: FC = () => {
  return (
    <View style={styles.nav_meta}>


    </View>
  )
}

export default Navigation