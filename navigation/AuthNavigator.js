import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home.js";
import Login from "../screens/Login.js";
import SignUp from "../screens/SignUp.js";
import TabNavigator from "../navigation/TabNavigator.js";
import { createStackNavigator } from "@react-navigation ";

const Switch = createStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Switch.Navigator>
        <Switch.Screen name="Login" component={Login} />
        <Switch.Screen name="SignUp" component={SignUp} />
      </Switch.Navigator>
    </NavigationContainer>
  );
}
