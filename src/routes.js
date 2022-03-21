import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Catalog from './pages/Catalog'

const Stack = createNativeStackNavigator()

export default function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            title: 'Catálogo',
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
