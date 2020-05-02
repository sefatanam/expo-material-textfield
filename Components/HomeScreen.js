import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button icon='google'
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Form")}
      >Go To Form</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems:'center',
    justifyContent: "center",
  },

  button: {
    margin: 8,
    backgroundColor: "#6200ee"
  },
});
export default HomeScreen;
