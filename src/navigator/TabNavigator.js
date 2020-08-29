import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Dashboard from "../screens/Dashboard";
import Workouts from "../screens/Workouts";

const TabNav = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Profile" component={Profile} />
      <TabNav.Screen name="Dashboard" component={Dashboard} />
      <TabNav.Screen name="Workouts" component={Workouts} />
    </TabNav.Navigator>
  );
};

export default TabNavigator;
