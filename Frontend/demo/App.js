// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home  from './components/Home';
import CreateEmployee from './components/CreateEmployee';
import ViewEmployee from './components/ViewEmployee';
import EditEmployee from './components/EditEmployee';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateEmployee" component={CreateEmployee} />
        <Stack.Screen name="ViewEmployee" component={ViewEmployee} />
        <Stack.Screen name="EditEmployee" component={EditEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;