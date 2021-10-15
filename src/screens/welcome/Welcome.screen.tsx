import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {SPACING} from '../../assets/themes/globals';
import {MyText} from '../../components/myText/MyText.component';
import {AppLayout} from '../layout/App.layout';

export const Welcome = (navigation: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppLayout>
        <View style={{alignItems: 'center'}}>
          <MyText myText="Let's get started" variant="title" />
        </View>
        <View style={{alignItems: 'center', marginTop: SPACING.medium}}>
          <MyText myText="Let's get started" variant="normal" />
        </View>
      </AppLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
