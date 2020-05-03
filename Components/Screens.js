import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { OutlinedTextField } from "react-native-material-textfield";

import { AuthContext } from "./Contex";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
    <Button
      onPress={() =>
        navigation.push("Details", { name: "React Native by Example " })
      }
    >
      React Native by Example
    </Button>
    <Button
      onPress={() =>
        navigation.push("Details", { name: "React Native School" })
      }
    >
      React Native School
    </Button>
    <Button onPress={() => navigation.toggleDrawer()}>Drawer</Button>
  </ScreenContainer>
);

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button onPress={() => navigation.push("Search2")}>Search 2</Button>

    <Button
      onPress={() => {
        navigation.navigate("Home", {
          screen: "Details",
          params: { name: "React Native School" },
        });
      }}
    >
      React Native School
    </Button>
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.toggleDrawer()}>Drawer</Button>
      <Button onPress={() => signOut()}>Sign Out</Button>
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  console.log("From Signin account screen :" + navigation);
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>

      <Button onPress={() => signIn()}>Sign In</Button>
      <Button onPress={() => navigation.push("CreateAccount")}>
        Create Account
      </Button>
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>

      <Button onPress={() => signUp()}>Sign Up</Button>
    </ScreenContainer>
  );
};
