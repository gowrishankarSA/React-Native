import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="To Components"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        title="To List"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="To Image"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="To Counter Screen"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="To Color Screen"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="To Square Screen"
        onPress={() => props.navigation.navigate("Square")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
