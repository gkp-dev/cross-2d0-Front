import React,{useState} from 'react'
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

function ForgetPassword({navigation}) {
    const [email, setEmail] = useState('')

    //Change Value of the form
    const handleEmail = (value) => {
        setEmail(value)
    }

    //Send Form
    const handleSubmit = () => {
        //Vérification
        Alert.alert('', 'Message Sent')
    }
    

    const styles = StyleSheet.create({
        arrow: {
            position: 'absolute',
            left: -160,
            top:10
        },
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

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.arrow}  source={require('../assets/images&icons/arrow.png')}/>
            </TouchableOpacity>

            <Text style={{fontSize: 30, fontWeight:'bold',marginTop:70, marginBottom: 100}}>Forget Password</Text>

            <View style={styles.containerInput}>
              <Text>Email: </Text>
              <TextInput value={email} placeholder="Email" style={[styles.input, {width:250}]} onChangeText={handleEmail}></TextInput>
            </View>

            <View style={[styles.containerInput, {marginBottom: 100}]}>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text style={{color: "white", textAlign:'center'}}>Send Password?</Text>
                </TouchableOpacity>
            </View>
            
        </View>

        
    )


}

export default ForgetPassword
