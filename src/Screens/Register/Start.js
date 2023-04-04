import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Buttons from '../../Components/Buttons/buttons'
import Container from '../../Components/Container/Container'
import Logo from '../../Components/ImageView/logo'

export default function Start({ navigation }) {
  return (
  <Container>
    <View style={styles.blueback}>
    </View>
     <Logo/>
     <Buttons tittle={'Login'}  onPress={() => navigation.navigate("Login")}/>
     <Buttons tittle={'Signup'}  onPress={() => navigation.navigate("Signup")}/>
  </Container>
  )
}


const styles = StyleSheet.create({
blueback:{
 backgroundColor:"#092143",
 padding: 60
}
})