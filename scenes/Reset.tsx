import React, { useState } from 'react'
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'

import { Text } from '../components/Themed'
import { RootTabScreenProps } from '../types'

export default function ResetScreen({ navigation }: RootTabScreenProps<'ResetScreen'>) {
  const [un, setUn] = useState<string>('')

  const submitDetails = () => {
    console.log('We are trying to submit your password reset request')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>
              Enter your email and we'll send you a message that lets you reset your password
      </Text>
      <Text style={styles.label}>
                Email
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setUn}
        value={un}
        placeholder='Enter your email'
      />
      <TouchableOpacity
        disabled={!un}
        style={[styles.button, !un ?
          styles.buttonDisabled :
          null]}
        accessibilityLabel='Submit password reset request'
        onPress={submitDetails}>
        <Text style={styles.buttonText}>Submit</Text>
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
  }
})
