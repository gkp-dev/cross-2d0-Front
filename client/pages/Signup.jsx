import React,{useState} from 'react'
import { TextInput, View, Text, StyleSheet,Button, TouchableOpacity, Alert } from 'react-native';


function Signup({ navigation }) {
    const [name, setName] = useState('')
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    //Change Value of the form
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
  }
  
  const handleName = (event) => {
        setName(event.target.value)
    }

    const handleFirstname = (event) => {
        setFirstname(event.target.value)
    }
    

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 40
        },
        input: {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor:'gray',
            borderRadius: 5,
            padding: 5,
            marginTop: 5
        },
        btn: {
            width: 150,
            padding: 7,
            borderRadius: 3,
            backgroundColor: "#24888f"

        },
        containerInput: {
            marginBottom: 20,
        },
    })

    return (
        <View style={styles.container}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: 70, marginBottom: 50 }}>Signup</Text>
        
            <View style={styles.containerInput}>
              <Text>Name: </Text>
              <TextInput value={name} placeholder="Name" style={[styles.input, {width:250}]} onChange={handleName}></TextInput>
            </View>

            <View style={styles.containerInput}>
              <Text>Firstname: </Text>
              <TextInput  placeholder="Firstname" value={firstname} style={[styles.input, {width:250}]} onChange={handleFirstname}></TextInput>
            </View>

            <View style={styles.containerInput}>
              <Text>Email: </Text>
              <TextInput value={email} placeholder="Email" style={[styles.input, {width:250}]} onChange={handleEmail}></TextInput>
            </View>

            <View style={styles.containerInput}>
              <Text>Password: </Text>
              <TextInput secureTextEntry={true} placeholder="Password" value={password} style={[styles.input, {width:250}]} onChange={handlePassword}></TextInput>
            </View>

            <View style={[styles.containerInput, {marginBottom: 20}]}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TaskPage')}>
                    <Text style={{color: "white", textAlign:'center'}}>Send</Text>
                </TouchableOpacity>
            </View>

            

            <Text style={{color:'#4e4e4e', textDecorationLine:'underline'}} onPress={() => navigation.goBack()}>You already have an account? </Text>
            


        </View>

        
    )


}

export default Signup