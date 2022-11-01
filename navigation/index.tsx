/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React, { useEffect } from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ColorSchemeName } from 'react-native'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { setAuthUser, clearAuthUser } from '../store/modules/auth'
import store from '../store'
import { Provider } from 'react-redux'

import ModalScreen from '../scenes/ModalScreen'
import NotFoundScreen from '../scenes/NotFoundScreen'
import TabOneScreen from '../scenes/TabOneScreen'
import LoginScreen from '../scenes/Login'
import SignUpScreen from '../scenes/SignUp'
import ResetScreen from '../scenes/Reset'
import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <Provider store={store}>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  const dispatch = useAppDispatch() 
  const user = useAppSelector(state => state.auth.user)

  onAuthStateChanged(auth, (user) => {
    if (user?.email) {
      dispatch(setAuthUser(user.email))
    } else {
      dispatch(clearAuthUser())
    }
  })

  useEffect(() => {
    console.log(`Our user is ${user}`)
  }, [user])

  return (
    <Stack.Navigator>
      {(user !== null) ? ( 
        <Stack.Screen 
          name='TabOne' 
          component={TabOneScreen} />
      ) :
        (
          <Stack.Group>
            <Stack.Screen
              name='LoginScreen'
              component={LoginScreen}
            />
            <Stack.Screen
              name='SignUpScreen'
              component={SignUpScreen}
            />
            <Stack.Screen
              name='ResetScreen'
              component={ResetScreen}
            />
          </Stack.Group>
        )}
      <Stack.Screen 
        name='NotFound' 
        component={NotFoundScreen} 
        options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
