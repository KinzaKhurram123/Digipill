import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../../Components/Container/Container';
import BackButton from '../../Components/Buttons/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from '../../Components/Constant';

export default function Home({navigation}) {
  return (
    <Container>
      <View style={styles.blueback}>
        <TouchableOpacity style={{padding: 12}}></TouchableOpacity>
        <Text style={styles.title}>Pharamacy</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 4,
          }}>
          <TouchableOpacity style={{padding: 2}}><Text>hello</Text></TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  blueback: {
    backgroundColor: '#092143',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
});
