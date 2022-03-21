import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
