import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../Theme/Colors";
// import { SIZES } from "../../Theme/Fonts";

const InnerContainer = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default InnerContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 0.5,
    backgroundColor: "#ffff",
    borderTopLeftRadius: 4,
    borderTopRightRadius:  4,
    borderColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
});