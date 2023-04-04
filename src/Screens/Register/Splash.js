import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../../Components/ImageView/logo'
import Background from '../../Components/Header-Bar/background'
import Anotherbackground from '../../Components/Header-Bar/background'


const Splash = ({navigation}) => {
    setTimeout(() =>{
        navigation.navigate('Start')
       }, 3000 )
  return (
      <Anotherbackground>
        
      </Anotherbackground>
    
  )
}

export default Splash

const styles = StyleSheet.create({
Splash:{
  flex : 1,
  alignItems:'center'  
}

})