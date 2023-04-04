import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function InputField({
  value,
  onChangeText,
  icon,
  customStyles,
  otherProps,
}) {
  const [passwordHide, setpasswordHide] = useState(true);

  return (
    <>
      <TextInput
        style={[customStyles, , styles.input]}
        value={value}
        onChangeText={onChangeText}
        {...otherProps}
      />
      {icon && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setpasswordHide(!passwordHide)}>
          {passwordHide ? (
            <Feather name="eye" size={22} color={'gray'} />
          ) : (
            <Feather name="eye-off" size={22} color={'gray'} />
          )}
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {},
});
