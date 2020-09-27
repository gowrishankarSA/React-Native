import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from '../components/ColorCounter'

const SquareScreen = (props) => {

  return (
    <View>
        <ColorCounter color="Red"/>
        <ColorCounter color="Green"/>
        <ColorCounter color="Blue"/>

    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SquareScreen;
 