import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Buttons({tittle, onpress}) {
  return (
  <TouchableOpacity onPress={onpress} activeOpacity={0.8} style={styles.buttons}>
    <Text style={styles.text}>{tittle}</Text>
  </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    buttons:{
     backgroundColor:"#FF4445",
     paddingVertical: 17,
     margin: 20,
    borderRadius: 100,
    alignContent: 'center'
    },
    text:{
    color: "white",
    textAlign:"center",
    fontFamily: 'Inter-Bold',
    fontWeight: "bold",
    fontSize: 15
    }
})