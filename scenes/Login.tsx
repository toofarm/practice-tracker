import React,{ useState } from 'react'
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

import { Text } from '../components/Themed'
import { RootTabScreenProps } from '../types'

export default function LoginScreen({ navigation }: RootTabScreenProps<'LoginScreen'>) {
  const [un, setUn] = useState<string>('')
  const [pw, setPw] = useState<string>('')

  const submitDetails = async () => {
    try {
      const user = signInWithEmailAndPassword(auth, un, pw)
      console.log(user)
    } catch (err) {
      console.log(err)
      new Error('Unable to sign you in')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>
                Email or Username
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setUn}
        value={un}
        placeholder='Enter your email'
      />
      <Text style={styles.label}>
                Password
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setPw}
        value={pw}
        secureTextEntry={true}
        placeholder='Enter your password'
      />
      <TouchableOpacity
        disabled={!un || !pw}
        style={[styles.button, !un || !pw ?
          styles.buttonDisabled :
          null]}
        accessibilityLabel='Submit login credentials'
        onPress={submitDetails}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityLabel='Sign up'
        onPress={() => navigation.navigate('SignUpScreen')}
      >
        <Text style={styles.inlineLink}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityLabel='Reset password'
        onPress={() => navigation.navigate('ResetScreen')}
      >
        <Text style={styles.inlineLink}>
          Reset password
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  label: {
    marginLeft: 12,
    marginRight: 12,
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  button: {
    borderColor: 'blue',
    borderWidth: 2,
    margin: 12,
    padding: 6,
    borderRadius: 12
  },
  buttonDisabled: {
    opacity: 0.4
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center'
  },
  inlineLink: {
    margin: 12,
    color: 'blue'
  }
})
