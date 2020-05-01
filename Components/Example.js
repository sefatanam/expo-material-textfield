import React, { Component } from 'react';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
 
class Example extends Component {
  fieldRef = React.createRef();
 
  onSubmit = () => {
    let { current: field } = this.fieldRef;
 
    console.log(field.value());
  };
 
  formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
  };
 
  render() {
    return (
      <OutlinedTextField
        label='Phone number'
        keyboardType='phone-pad'
        formatText={this.formatText}
        onSubmitEditing={this.onSubmit}
        ref={this.fieldRef}
      />
    );
  }
}