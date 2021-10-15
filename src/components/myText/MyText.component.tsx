import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';

const TEXT_STYLE = {
  normal: 'normal',
  title: 'title',
};

const changeTextByVariant = (variant: any) => {
  if (variant === TEXT_STYLE.normal) {
    return styles.normal;
  }
  if (variant === TEXT_STYLE.title) {
    return styles.title;
  }
};

export const MyText = (props: any) => {
  const myStyle = changeTextByVariant(props.variant);
  return (
    <Text
      style={[
        myStyle,
        {
          color: props.color,
          lineHeight: props.lineHeight,
          textAlign: props.textAlign,
        },
      ]}>
      {props.myText}
    </Text>
  );
};

const styles = StyleSheet.create({
  normal: {
    fontSize: SPACING.xmedium,
    color: COLOR.normalTextColor,
    fontWeight: 'normal',
  },
  title: {
    fontSize: SPACING.xlarge,
    color: COLOR.tilteTextColor,
    fontWeight: 'bold',
  },
});
