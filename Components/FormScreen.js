import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function FormScreen() {
  return (
    <View style={styles.container}>
      <Text>Form</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FormScreen;
