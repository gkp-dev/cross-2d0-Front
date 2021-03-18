import React,{useState} from 'react'
import { TextInput, View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';




function Signup({ navigation }) {
    const [name, setName] = useState('')
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState("Unknown");
    const [ date, setDate ] = useState("");
    

    
    //Change Value of the form
    const handleEmail = (value) => {
        setEmail(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
  }
  
    const handleName = (value) => {
        setName(value)
    }

    const handleFirstname = (value) => {
        setFirstname(value)
    }

    const handleDate = (value) => {
        setDate(value)
    }
    const handleGender = (value) => {
        setGender(value)
    }

    const handleSubmit = async () => {
        //Vérification
           const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
               method: 'POST', 
              mode: 'cors', 
              headers: {
             'Content-Type': 'application/json'
              },
              body: JSON.stringify({name,firstname,email,password,gender,date}) 
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

    //Reset Form
    const reset = () => {
        setName("")
        setFirstname("")
        setEmail("")
        setDate("")
        setGender("")
        setPassword("")
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

    const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#111111',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    color: 'black',
    paddingRight: 30,
    width: 250
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    color: 'black',
    paddingRight: 30,
    width: 250
  },
});


    return (
        <View style={styles.container}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: 70, marginBottom: 50 }}>Signup</Text>
        
            <View style={styles.containerInput}>
              <Text>Name: </Text>
              <TextInput value={name} placeholder="Name" style={[styles.input, {width:250}]} onChangeText={handleName}></TextInput>
            </View>

            <View style={styles.containerInput}>
              <Text>Firstname: </Text>
              <TextInput  placeholder="Firstname" value={firstname} style={[styles.input, {width:250}]} onChangeText={handleFirstname}></TextInput>
            </View>

            <View style={styles.containerInput}>
              <Text>Birthday: </Text>
              <TextInput  placeholder="15/05/1975" value={date} style={[styles.input, {width:250}]} onChangeText={handleDate}></TextInput>
            </View>

            <View style={styles.containerInput}>
                <Text>Gender: </Text>
                
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                value={gender}   
                onValueChange={handleGender}
                style={pickerSelectStyles}
                    
            items={[
                { label: 'Man', value: 'MALE' },
                { label: 'Woman', value: 'FEMALE' },
                { label: 'Unknown', value: 'NA' },
            ]}
        />
            </View>

            <View style={styles.containerInput}>
              <Text>Email: </Text>
              <TextInput value={email} placeholder="Email" style={[styles.input, {width:250}]} onChangeText={handleEmail}></TextInput>
            </View>

            <View style={styles.containerInput}>
              <Text>Password: </Text>
              <TextInput secureTextEntry={true} placeholder="Password" value={password} style={[styles.input, {width:250}]} onChangeText={handlePassword}></TextInput>
            </View>

            <View style={[styles.containerInput, {marginBottom: 20}]}>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text style={{color: "white", textAlign:'center'}}>Send</Text>
                </TouchableOpacity>
            </View>

            

            <Text style={{color:'#4e4e4e', textDecorationLine:'underline'}} onPress={()=>navigation.goBack()}>You already have an account? </Text>
            


        </View>

        
    )


}

export default Signup