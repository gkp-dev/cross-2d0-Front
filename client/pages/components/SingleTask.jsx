import React,{useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'

function SingleTask({ taskValue }) {
    const [isComplete, setComplete] = useState()
    const styleValue = isComplete ? { ...styles.taskValue, ...{ textDecoration: 'line-through' } }: {...styles.taskValue}

    const handleComplete = () => {
        console.log('hey')
        setComplete(true)
        console.log(styleValue)
    }

    const handleTrash = () => {
        Alert.alert('Delete Element')
    }


    return (
    
          <View style={{ padding: 20 }}>

            {/* Task */}
            <View style={[styles.middleContainer]}>
              
              <View style={[styles.btnContainer,{width:280}]}>
                
                <Text style={[styleValue]}>{taskValue}</Text>

                <TouchableOpacity onPress={handleComplete} style={{backgroundColor:'#00b7ff', borderRadius: 5, width: 50, height: 30, top:5, marginRight: 5}}>
                  <Text  style={{color:'white', textAlign:'center', fontSize:17}}>Done</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={handleTrash}>
                  <Image style={{height: '82%',width: 30, resizeMode:'cover', top:2}} source={require('../assets/images&icons/removeBtn.png')}></Image>
                </TouchableOpacity>
            </View>
              
          </View>

          </View>
        
    )
}

const styles = StyleSheet.create({
    taskValue: {
        fontSize: 20,
        textAlign: 'center',
        padding: 4,
        marginRight: 5,
        height: '100%',
        width: '67%'
    },
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
  }
    
})

export default SingleTask
