import React,{useState} from 'react'
import * as Font from 'expo-font'
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';

import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Task from './pages/Task'

const getFonts = () => Font.loadAsync({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
})


function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    {console.log(fontsLoaded)}
    return <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn}
    />
  }

  return (
    
    <View>
      <Signup/>
    </View>
  )
}

export default App
