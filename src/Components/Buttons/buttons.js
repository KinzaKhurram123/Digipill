import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Buttons({tittle, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.buttons}>
      <Text style={styles.text}>{tittle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: '#FF4445',
    borderRadius: 100,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
