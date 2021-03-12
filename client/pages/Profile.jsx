import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    Platform,
    SafeAreaView,
    Alert,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

function profile() {
    
    return (
        <SafeAreaView style={styles.container}>


            <Image style={styles.arrow} onPress={()=>Alert.alert('Popup', 'Go to dashboard')} style={styles.arrow} source={require('../assets/images&icons/arrow.png')}/>
            

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Profile</Text>
            </View>
            
            <View style={styles.containerAvatar}>
               <ImageBackground style={styles.avatar} source={require('../assets/images&icons/avatar.png')}></ImageBackground>
            </View>


            <View style={styles.containerInfo}>
                <View style={{right: 0}}>
            <Text style={[styles.information]} >Name: <Text style={styles.disabledInfo}>Minh</Text></Text>
            <Text style={styles.information} >Firstname: <Text style={styles.disabledInfo}>Chinh</Text> </Text>
            <Text style={styles.information} >Email: <Text style={styles.disabledInfo}>minhchin@gmail.com</Text> </Text>
            <Text style={styles.information} >Birthdate: <Text style={styles.disabledInfo}>20/10/03</Text> </Text>
            <Text style={styles.information} >Gender: <Text style={styles.disabledInfo}>Male</Text> </Text>
                </View>
            </View>
            
            <View style={[styles.middleContainer,{marginTop: 60}]}>
            <TouchableOpacity style={styles.deleteBtn} onPress={()=>Alert.alert("You want to delete your account?","Let's go",[{text:'yes'},{text:'no'}])}>
               <ImageBackground style={styles.trash} source={require('../assets/images&icons/trash.png')}></ImageBackground>
               <Text style={{color:'red', fontSize: 18, fontWeight:'bold'}}>Delete Account</Text>
            </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 0: StatusBar.currentHeight
    },
    arrow: {
        marginTop: 20,
        marginLeft: 25
    },
    titleContainer: {
        marginVertical: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    containerInfo: {
        padding: 20,
        flexDirection:'row',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
    },
    containerAvatar: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 40
    },
    information: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    disabledInfo: {
        color: '#726d6d'
    },
    avatar: {
        height: 110,
        width: 110,
        resizeMode: "cover",

    },
    deleteBtn: {
        display: 'flex',
        flexDirection:'row',
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 2,
        padding: 10,
        borderRadius: 8,
        width: 200
    },
    trash: {
        width: 20,
        height: 25,
        resizeMode: "cover",
        marginRight: 10
    },
    middleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center'
    }
})

export default profile
