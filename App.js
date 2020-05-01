import React, { Component } from "react";
import {
  TextField,
  OutlinedTextField,
  FilledTextField,
} from "react-native-material-textfield";
import { View, Text, StyleSheet } from "react-native";

export default class App extends Component {
  state = {
    phone: "",
  };

  render() {
    let { phone } = this.state;

    return (
      <View style={styles.container}>
        <TextField
        
          label="Phone number"
          value={phone}
          onChangeText={(phone) => this.setState({ phone })}
        />

        <OutlinedTextField
        style={styles.color}
          label="Phone number"
          value={phone}
          onChangeText={(phone) => this.setState({ phone })}
        />
        <FilledTextField
          style={styles.color}
          label="Phone number"
          value={phone}
          onChangeText={(phone) => this.setState({ phone })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
  width:350,
  padding:20,
  margin:8,
  justifyContent:"center",
  flex:1,
  alignContent:'space-around'
  
  
}
,
color:{
  color:"#6200ee",
  marginBottom:10,
  flexDirection:'row',
  flex:1,
  justifyContent:'center'
  
}
});
