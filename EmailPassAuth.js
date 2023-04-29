import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const EmailPassAuth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    const userSignin = () => {
        auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log(JSON.stringify(res))
            Alert.alert('user logged-in '+JSON.stringify(res))
        })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder='Enter Email'
                value={email}
                onChangeText={txt => setEmail(txt)}
                style={{
                    width: '90%',
                    height: 50,
                    borderWidth: 0.5,
                    borderRadius: 20,
                    paddingLeft: 20
                }}
            />

            <TextInput
                placeholder='Enter Password'
                value={password}
                onChangeText={txt => setPassword(txt)}
                style={{
                    width: '90%',
                    height: 50,
                    borderWidth: 0.5,
                    borderRadius: 20,
                    paddingLeft: 20,
                    marginTop: 20
                }}
            />

            <TouchableOpacity
                style={{ width: '90%', height: 50, borderRadius: 20, backgroundColor: '#000', marginTop: 50, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    createUser()
                }}>
                <Text style={{ color: '#fff' }}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: '90%', height: 50, borderRadius: 20, backgroundColor: '#000', marginTop: 50, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    userSignin()
                }}>
                <Text style={{ color: '#fff' }}>Sign In</Text>
            </TouchableOpacity>

        </View>
    )
}

export default EmailPassAuth