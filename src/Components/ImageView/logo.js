import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
// import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from '../../assets/images';

const Logo = ({style}) => {
  return (
    <View style={[styles.logo, style]}>
      <Image
        source={images.HeaderImage}
        style={{height: 170, width: 260}}
        resizeMode="contain"
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    // paddingVertical: hp('10'),
    alignItems: 'center',
  },
});
