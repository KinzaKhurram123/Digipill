import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {call_icon} from '../../assets/icons';
import Buttons from '../../Components/Buttons/buttons';
import Container from '../../Components/Container/Container';
import Logo from '../../Components/ImageView/logo';

export default function Start({navigation}) {
  return (
    <Container>
      <View style={styles.blueback}></View>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View style={{height: 20}} />
        <Logo />
        <View style={{height: 50}} />
        <Buttons
          tittle={'Login'}
          onPress={() => navigation.navigate('Login')}
        />
        <Buttons
          tittle={'Signup'}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  blueback: {
    backgroundColor: '#092143',
    padding: 60,
    flexDirection: 'row',
  },
});
