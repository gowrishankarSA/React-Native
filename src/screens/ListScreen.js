import React from "react";
import { Text, StyleSheet } from "react-native";

const ListScreen = () => {
  return <Text style={styles.text}>This is the ListScreen screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default ListScreen;
