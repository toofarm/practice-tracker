import { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SignUpScreen({ navigation }: RootTabScreenProps<'SignUpScreen'>) {
    const [un, setUn] = useState<string>('')
    const [em, setEm] = useState<string>('')
    const [pw, setPw] = useState<string>('')

    const submitDetails = () => {
        console.log('We are trying to submit our details')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title}>
                    Let's sign you up!
                </Text>
            </View>
            <Text style={styles.label}>
                Choose a username
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setUn}
                value={un}
                secureTextEntry={false}
                placeholder='Enter your username'
            />
            <Text style={styles.label}>
                Email
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setEm}
                value={em}
                placeholder='Enter your email'
            />
            <Text style={styles.label}>
                Pick a password
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setPw}
                value={pw}
                secureTextEntry={false}
                placeholder='Enter your password'
            />
            <TouchableOpacity
                disabled={!un || !pw || !em}
                style={[styles.button, !un || !pw || !em ?
                    styles.buttonDisabled :
                    null]}
                accessibilityLabel='Submit login credentials'
                onPress={submitDetails}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        marginBottom: 12
    },
    title_container: {
        margin: 12,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        backgroundColor: 'transparent'
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
        fontWeight: "bold",
        color: 'blue',
        textAlign: 'center'
    }
});
