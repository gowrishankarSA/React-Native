import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
        <Image source={props.imageSource}/>
      <Text style={styles.text}>{props.title}</Text>
      <Text > Image score - {props.score}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageDetail;
