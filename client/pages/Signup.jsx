import React, { useState } from 'react'
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


function Signup() {
    
    const [name, setName] = useState('')
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    //Change Value of the form
    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleFirstName = (event) => {
        setFirstname(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 40,
            fontFamily: 'poppins-regular'
        },
        input: {
            border: "1px solid gray",
            borderRadius: 5,
            padding: 5,
            marginTop: 5
        },
        btn: {
            padding: 5,
            borderRadius: 5,
            backgroundColor: "#248f24"

        },
        containerInput: {
            marginBottom: 20,
        },
        title: {
            fontSize: 37,
            marginBottom: 60
        }
    })


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Signup</Text>

            <View style={styles.containerInput}>
              <Text>Name: </Text>
              <TextInput value={name} placeholder="Email" style={styles.input} onChange={handleName}></TextInput>
            </View>

            <View style={styles.containerInput}>
              <Text>Firstname: </Text>
              <TextInput value={firstname} placeholder="Email" style={styles.input} onChange={handleFirstName}></TextInput>
            </View>

            <View style={styles.containerInput}>
              <Text>Birthday: </Text>
            </View>

            <View style={styles.containerInput}>
              <Text>Email: </Text>
              <TextInput value={email} placeholder="Email" style={styles.input} onChange={handleEmail}></TextInput>
            </View>

            <View style={styles.containerInput}>
              <Text>Password: </Text>
              <TextInput secureTextEntry={true} placeholder="Password" value={password} style={styles.input} onChange={handlePassword}></TextInput>
            </View>

            <View style={styles.containerInput}>
                <TouchableOpacity style={styles.btn} onPress={()=>console.log(name, firstname, email,password)}>
                    <Text style={{color: "white"}}>Send</Text>
                </TouchableOpacity>
            </View>

            <Text>You have already an account? </Text>

        </View>

        
    )


}

export default Signup
