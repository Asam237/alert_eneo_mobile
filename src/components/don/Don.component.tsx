import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SPACING} from '../../assets/themes/globals';
import {MyText} from '../myText/MyText.component';

export const Don = (props: any) => {
  return (
    <View style={styles.container__card}>
      <View style={{flexDirection: 'row'}}>
        <Image style={{width: 45, height: 45}} source={props.data.picture} />
        <View style={styles.container__center}>
          <MyText
            fontWeight="bold"
            fontSize={16}
            myText={props.data.name}
            variant="title"
          />
          <MyText
            myText={props.data.tel}
            color="red"
            fontWeight="bold"
            variant="title"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container__card: {
    backgroundColor: '#fff',
    elevation: 5,
    padding: SPACING.small,
    marginTop: SPACING.xmedium,
  },
  container__don: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container__center: {
    marginLeft: SPACING.small,
    justifyContent: 'center',
  },
});
