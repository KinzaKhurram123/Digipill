import React from 'react';
import {Alert, StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from 'react-native';
import AppButton from '../../../Components/Buttons/App-Button';
import Container from '../../../Components/Container/Container';
import InnerContainer from '../../../Components/Container/InnerContainer';
import InputField from '../../../Components/Inputs/InputField';
import BackButton from '../../../Components/Buttons/Header';
import Buttons from '../../../Components/Buttons/buttons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CommonStyles from '../../../Utils/CommonStyles';
import {back_arrow_icon, phone_icon} from '../../../assets/icons';
import { SvgXml } from "react-native-svg";
import { Icon } from '../../../Components';

ButtonAlert = navigation =>
  Alert.alert('Login Error', 'Not Registered', [
    {
      text: 'Signup',
      onPress: () => navigation.navigate('Signup'),
      style: 'cancel',
    },
  ]);
44;
export default function Login({navigation}) {
  return (
    <Container>
      <View style={styles.blueback}>
      <TouchableOpacity onPress={() => navigation.navigate('Start')}>
          <Icon name={back_arrow_icon} />
        </TouchableOpacity>
        <Text style={CommonStyles.title}>Login</Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: 20}}>
      <ScrollView>
        <InnerContainer>
          <View style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{height: 50}} />
            <InputField
               name="name"
               placeholder="Enter your Name"
               style={{ borderRadius: 0 }}
               maxLength={20}
            />
            {/* <SvgXml Xml ={phone_icon}  width="64" height="64"/> */}
            <View
              style={{
                justifyContent: 'flex-end',
                flex: 1,
                paddingBottom: hp(5),
              }}>
              <Buttons
                tittle={'Login'}
                onPress={() => navigation.navigate('Main')}
              />
            </View>
          </View>
        </InnerContainer>
      </ScrollView>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  blueback: {
    backgroundColor: '#092143',
    paddingVertical: 40,
    flexDirection: 'row',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
});
