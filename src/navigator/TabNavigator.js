import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Profile from "../screens/Profile";
import Dashboard from "../screens/Dashboard";
import Workouts from "../screens/Workouts";

const TabNav = createBottomTabNavigator();
const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const TabNavigator = () => {
  return (
    <TabNav.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Profile") {
            return (
              <MaterialIcons
                name={focused ? "person" : "person-outline"}
                size={22}
                color={focused ? activeColor : inactiveColor}
              />
            );
          } else if (route.name === "Dashboard") {
            return (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                size={22}
                color={focused ? activeColor : inactiveColor}
              />
            );
          } else {
            return (
              <MaterialCommunityIcons
                name={focused ? "notebook" : "notebook-outline"}
                size={22}
                color={focused ? activeColor : inactiveColor}
              />
            );
          }
        },
      })}
    >
      <TabNav.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
        }}
      />
      <TabNav.Screen
        name="Workouts"
        component={Workouts}
        options={{
          tabBarLabel: "Workouts",
        }}
      />
      <TabNav.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </TabNav.Navigator>
  );
};

export default TabNavigator;
