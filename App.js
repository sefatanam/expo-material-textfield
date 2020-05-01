import React, { Component } from "react";
import { View ,Text,StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import HomeScreen from './Components/HomeScreen';
import FormScreen from './Components/FormScreen'

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  }
})