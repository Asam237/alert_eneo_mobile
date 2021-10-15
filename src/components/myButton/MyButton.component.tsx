import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../myText/MyText.component';
export const MyButton = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigationName()}
      style={styles.container}>
      <MyText
        myText={props.myText}
        color={COLOR.secondaryColor}
        variant="normal"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SPACING.full,
    height: SPACING.full,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.primaryColor,
    borderRadius: SPACING.xlarge,
  },
});
