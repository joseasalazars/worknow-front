import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
const Workouts = () => {
  return (
    <View style={styles.container}>
      <Text>Workouts</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
