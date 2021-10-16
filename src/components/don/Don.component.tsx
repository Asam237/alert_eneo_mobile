import React from 'react';
import {Image, Text, View} from 'react-native';
import {SPACING} from '../../assets/themes/globals';

export const Don = (props: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: SPACING.small,
        justifyContent: 'flex-start',
      }}>
      <Image style={{width: 45, height: 45}} source={props.data.picture} />
      <View style={{marginLeft: SPACING.small}}>
        <Text style={{fontWeight: 'bold', color: '#000'}}>
          {props.data.name}
        </Text>
        <Text style={{marginTop: 2, fontWeight: 'bold', color: 'red'}}>
          {props.data.tel}
        </Text>
      </View>
    </View>
  );
};
