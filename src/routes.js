import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Header from './components/Header'
import Catalog from './pages/Catalog'

const Stack = createNativeStackNavigator()

export default function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShow: true,
          cardStyle: {backgroundColor: '#313746'}
        }}
        initialRouteName="Catalog"
      >
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            headerShow: true,
            headerTransparent: true,
            headerTitle: ()=> <Header/>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
