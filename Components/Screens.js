import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { OutlinedTextField , TextField} from "react-native-material-textfield";
import { Formik } from "formik";

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
  signInContainer: {
    alignContent: "center",
    width: 350,
  },

  textStyles: {
    fontSize: 25,
    margin: 8,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#6200ee",
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
  const isAuthIsRight = (values) => {
    console.log(values);
    if (values.emailOrPhoneNumber != "" && values.password != "") {
      return signIn();
    }
  };
  console.log("From Signin account screen :" + navigation);
  return (
    <ScreenContainer>
      <Text style={styles.textStyles}>Jomidar Login</Text>

      <Formik
        initialValues={{ emailOrPhoneNumber: "", password: "" }}
        onSubmit={(values) => isAuthIsRight(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isSubmitting,
        }) => {
          return (
            <View style={styles.signInContainer}>
              <TextField
                label="Email or Phone Number"
                onChangeText={handleChange("emailOrPhoneNumber")}
                onBlur={handleBlur("emailOrPhoneNumber")}
                value={values.emailOrPhoneNumber}
                style={{ borderColor: "#6200ee" }}
              />
              <TextField
                label="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <Button mode="outlined" onPress={handleSubmit}>
                Sign In
              </Button>
            </View>
          );
        }}
      </Formik>

      {/* <Button onPress={() => signIn()}>Sign In</Button> */}
      <Button onPress={() => navigation.push("CreateAccount")}>
        Create Account
      </Button>
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);
  const isAuthIsRight = (values) => {
    console.log(values);
    if (values.emailOrPhone != "" && values.password != "" && values.confirmPassword!="" && values.name!="") {
      return signUp();
    }
  };
  return (
    <ScreenContainer>
      <Text style={styles.textStyles}>Create Account Screen</Text>
      <Formik
        initialValues={{
          name: "",
          emailOrPhone: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => isAuthIsRight(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isSubmitting,
        }) => {
          return (
            <View style={styles.signInContainer}>
              <OutlinedTextField
                label="Your Name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <OutlinedTextField
                label="Email or Phone"
                onChangeText={handleChange("emailOrPhone")}
                onBlur={handleBlur("emailOrPhone")}
                value={values.emailOrPhone}
              />
              <OutlinedTextField
                label="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <OutlinedTextField
                label="Confirm Password"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
              />
              <Button mode="outlined" onPress={handleSubmit}>
                Sign Up
              </Button>
            </View>
          );
        }}
      </Formik>

      {/* <Button onPress={() => signUp()}>Sign Up</Button> */}
    </ScreenContainer>
  );
};
