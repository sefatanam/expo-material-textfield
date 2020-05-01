import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        style={styles.buttonStyle}
        title="Form"
        onPress={() => navigation.navigate("Form")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {

    color:"green",
    width:150,
    margin:7
  },
});
export default HomeScreen;
