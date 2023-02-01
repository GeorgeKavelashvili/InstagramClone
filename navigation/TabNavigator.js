import React from "react";
import { View, Image, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home.js";
import Search from "../screens/Search.js";
import Activity from "../screens/Activity.js";
import Upload from "../screens/Upload.js";
import Profile from "../screens/Profile.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search-sharp" : "search-outline";
            } else if (route.name === "Add") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Upload") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Activity") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Profile") {
              iconName = focused
                ? "person-circle-sharp"
                : "person-circle-outline";
            }
            return <Ionicons name={iconName} size={size} colour={colour} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Upload" component={Upload} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
