import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorCounter = (props) => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text style={styles.text}>{props.color}</Text>
      <Button
        title={`Increase ${props.color}`}
        
      />
            <Button
        title={`Decrease ${props.color}`}
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ColorCounter;
