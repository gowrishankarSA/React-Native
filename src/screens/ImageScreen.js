import React from "react";
import ImageDetail from '../components/ImageDetail'
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={7}/>
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={7}/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={7}/>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
