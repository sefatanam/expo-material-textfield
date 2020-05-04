import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "./Components/Contex";
import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash,
} from "./Components/Screens";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        title: "Sign In",
        headerStyle: {
          backgroundColor: "#6200ee",
        },
        headerTintColor: "white",
      }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{
        title: "Create Account",
        headerStyle: {
          backgroundColor: "#6200ee",
        },
        headerTintColor: "white",
      }}
    />
  </AuthStack.Navigator>
);

const Tabs = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      })}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="Search"
      component={Search}
      options={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    />
    <SearchStack.Screen
      name="Search2"
      component={Search2}
      options={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    />
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#aca7a7"
    barStyle={{ backgroundColor: "#6200ee" }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#6200ee",

        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarLabel: "Search",
        tabBarColor: "#6200ee",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen
      name="Home"
      component={TabsScreen}
      options={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
          headerStyle: { backgroundColor: "#6200ee" },
          headerTintColor: "white",
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
          headerStyle: { backgroundColor: "#6200ee" },
          headerTintColor: "white",
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider
      value={authContext}
      options={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    >
      <NavigationContainer>
        <RootStackScreen
          userToken={userToken}
          options={{
            headerStyle: { backgroundColor: "#6200ee" },
            headerTintColor: "white",
          }}
        />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
