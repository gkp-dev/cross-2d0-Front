import React, {useState} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert
} from 'react-native'
import {globalStyles} from '../styles/globalStyle'

function Task({ navigation }) {
  const [taskValue, setTaskValue] = useState('')
  const [newtaskValue, setnewtaskValue] = useState('')

  
  const handleChange = (value) => {
    setTaskValue(value)
  }
  const handlePress = () => {
    setnewtaskValue(taskValue)
  }
    return (
        
        <SafeAreaView style={[globalStyles.container, {flex: 1}]}>
         <ScrollView>
          <View style={[styles.middleContainer, styles.avatarContainer]}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
              <ImageBackground style={styles.avatar}  source={require('../assets/images&icons/avatar.png')}></ImageBackground>
            </TouchableOpacity>
          </View>
          
          <View style={[styles.middleContainer]}>
            <Text style={{fontSize:25}}>Pending Task(<Text id="countTask">1</Text>)</Text>
          </View>
           
          {/* Task Container */}
          <View style={{ padding: 20 }}>

            {/* Task */}
            <View style={[styles.middleContainer]}>
              
              <View style={[styles.btnContainer,{width:280}]}>
                
                <Text style={{ fontSize: 20, textAlign: 'center', padding: 4, marginRight: 5, height: '100%', width: '67%' }}>{newtaskValue}</Text>

                <TouchableOpacity style={{backgroundColor:'#00b7ff', borderRadius: 5, width: 50, height: 30, top:5, marginRight: 5}}>
                  <Text id='task' style={{color:'white', textAlign:'center', fontSize:17}}>Done</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <Image style={{height: '82%',width: 30, resizeMode:'cover', top:2}} source={require('../assets/images&icons/removeBtn.png')}></Image>
                </TouchableOpacity>
            </View>
              
          </View>


          </View>

          {/* Add Task Button */}
          <View style={[styles.middleContainer]}>
            <View style={styles.btnContainer}>
              <TextInput onChangeText={handleChange} value={taskValue}  placeholder="Type Something" style={{ fontSize: 17,textAlign:'center', padding: 4, marginRight: 5, height: '100%', width:'85%' }}></TextInput>
              <TouchableOpacity onPress={handlePress}>
                <Image style={{height: '82%', top:2}} source={require('../assets/images&icons/checkBtn.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>

          {/*  */}


          </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
  middleContainer: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center'
  
  },
  btnContainer: {
    width: 260,
    height:50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#868585',
    borderRadius: 7,
    padding: 5,
    display: 'flex',
    flexDirection:'row'
  },
  avatarContainer: {
    justifyContent: 'flex-end',
  },
  avatar: {
    margin: 5,
    marginTop: 10,
    height: 45,
    width: 45,
    resizeMode: "cover",
  }
    
})

export default Task
