import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BackButton from '../../Components/Buttons/Header';
import Container from '../../Components/Container/Container';
import InnerContainer from '../../Components/Container/InnerContainer';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
import { COLORS, FONTS, SIZES } from "../../Components/Constant";
import {ScrollView} from 'react-native-gesture-handler';
const CELL_COUNT = 4;

export default function Otp({navigation}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="-"
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };
  return (
    <Container scroll={true}>
      <View style={styles.blueback}>
        <BackButton navigation={navigation} />
      </View>
      <ScrollView>
        <InnerContainer>
          <View style={{marginTop: 50}}>
            <Text style={{color: '#092143', fontSize: 25, textAlign: 'center'}}>
              Enter Your Code
            </Text>
            <Text
              style={{
                color: 'rgba(9, 33, 67, 0.45)',
                fontSize: 17,
                textAlign: 'center',
              }}>
              We’ve send you a 4-digit code to 0123456789
            </Text>
          </View>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Resend Code
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </InnerContainer>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  codeFieldRoot: {
    padding: 15,
    // marginBottom:120
  },
  cell: {
    width: 50,
    height: 55,
    lineHeight: 40,
    fontSize: 24,
    borderWidth: 0.5,
    textAlign: 'center',
    borderRadius: 15,
    padding: 10,
    color: COLORS.TEXT_COLOR,
    backgroundColor: 'white',
    borderColor: '#092143',
  },
  focusCell: {
    borderColor: '#092143',
  },
  blueback: {
    backgroundColor: '#092143',
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 4,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#092143',
    padding: 30,
    alignContent: 'flex-start',
    borderRadius: 100,
    paddingVertical: 20,
    margin: 10,
  },
  btn2: {
    backgroundColor: '#FF4445',
    padding: 45,
    alignContent: 'flex-end',
    borderRadius: 100,
    paddingVertical: 20,
    margin: 10,
  },
});
