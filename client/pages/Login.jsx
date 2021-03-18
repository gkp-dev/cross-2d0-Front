import React,{useState} from 'react'
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    //Change Value of the form
    const handleEmail = (value) => {
        setEmail(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }
    
    //Send Form
    const handleSubmit = async () => {
        //Vérification
           const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
               method: 'POST', 
              mode: 'cors', 
              headers: {
             'Content-Type': 'application/json'
              },
              body: JSON.stringify({email,password}) 
            });
            const result = await response.json()
           if (result === '200') {
               await Alert.alert( 'Vous êtes bien inscris',
            [
                { text: "Ok", onPress:() => navigation.navigate('TaskPage')}
            ])
               reset()
               navigation.navigate('TaskPage')
        }
             Alert.alert('There was an issue')

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
//        
    })

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40, fontWeight:'bold',marginTop:70, marginBottom: 100}}>Login</Text>

            <View style={styles.containerInput}>
              <Text>Email: </Text>
              <TextInput value={email} placeholder="Email" style={[styles.input, {width:250}]} onChangeText={handleEmail}></TextInput>
            </View>

            <View style={styles.containerInput}>
              <Text>Password: </Text>
              <TextInput secureTextEntry={true} placeholder="Password" value={password} style={[styles.input, {width:250}]} onChangeText={handlePassword}></TextInput>
            </View>

            <View style={[styles.containerInput, {marginBottom: 100}]}>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text style={{color: "white", textAlign:'center'}}>Send</Text>
                </TouchableOpacity>
            </View>

            <Text style={{color:'#4e4e4e',textDecorationLine:'underline'}} onPress={() => navigation.navigate('SignupPage')}>You don't have an account? </Text>
            <Text style={{color:'#4e4e4e', textDecorationLine:'underline'}} onPress={() => navigation.navigate('ForgetPage')}>Forgot Password? </Text>


        </View>

        
    )


}

export default Login
