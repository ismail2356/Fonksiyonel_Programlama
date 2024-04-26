
import React from 'react'

import LoginPage from './src/screens/LoginPage'
import Kahveler   from './src/screens/Kahveler';
import Favoriler from './src/screens/Favoriler';
import Musteri from './src/screens/Musteri';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  
  <NavigationContainer> 
<Stack.Navigator>

  <Stack.Screen name='Login' component={LoginPage }/>
  <Stack.Screen name='kahve' component={Kahveler}/>
  <Stack.Screen name='Favori' component= {Favoriler} />
  <Stack.Screen name='musteri' component={Musteri} />

</Stack.Navigator>
  </NavigationContainer>
  
  )
}

export default App