import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return <Text style={styles.text}>This is the component screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 70
  }
});

export default ComponentScreen;
