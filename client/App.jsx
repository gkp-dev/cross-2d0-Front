import React,{useState} from 'react'
import * as Font from 'expo-font'
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';

import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Task from './pages/Task'

const Stack = createStackNavigator();

const getFonts = () => Font.loadAsync({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
})


function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  // if (!fontsLoaded) {
  //   {console.log(fontsLoaded)}
  //   return <AppLoading
  //     startAsync={getFonts}
  //     onFinish={() => setFontsLoaded(true)}
  //     onError={console.warn}
  //   />
  // }

  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginPage" component={Login} options={{ title: '' }}/>
        <Stack.Screen name="SignupPage" component={Signup} />
        <Stack.Screen name="ProfilePage" component={Profile} />
        <Stack.Screen name="TaskPage" component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
