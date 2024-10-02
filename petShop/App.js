import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WellCome from './layout/WellCome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './layout/Login';
import Register from './layout/Register';

export default function App() {
  const stack = createNativeStackNavigator()
  return (
    // <View>
    //   <WellCome/>
    // </View>
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name='WellCome' component={WellCome}/>
      <stack.Screen name='Login' component={Login}/>
      <stack.Screen name='Sigin' component={Register}/>
      </stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
