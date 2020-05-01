import React, { Component } from "react";
import { TextField } from "react-native-material-textfield";
import { View, SafeAreaView } from "react-native";

export default class App extends Component {
  state = {
    phone: "",
  };

  render() {
    let { phone } = this.state;

    return (
      <SafeAreaView>
        
        <TextField
          label="Phone number"
          value={phone}
          onChangeText={(phone) => this.setState({ phone })}
        />
        
      </SafeAreaView>
    );
  }
}
