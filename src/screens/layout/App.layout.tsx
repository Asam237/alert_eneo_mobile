import React from 'react';
import {StyleSheet, View} from 'react-native';

export const AppLayout = (props: any) => {
  console.log('Props: ', props);
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
