import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home.js";
import TabNavigator from "../navigation/TabNavigator.js";
import { createSwitchNavigator } from "@react-navigation";

const Switch = createSwitchNavigator({ initialRouteName: "Auth" });

export default function Nav() {
  return (
    <NavigationContainer>
      <Switch.Navigator>
        <Switch.Screen name="Home" component={TabNavigator} />
        <Switch.Screen name="Auth" component={AuthNavigator} />
      </Switch.Navigator>
    </NavigationContainer>
  );
}
