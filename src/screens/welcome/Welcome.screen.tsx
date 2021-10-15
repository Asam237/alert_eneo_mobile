import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {SPACING} from '../../assets/themes/globals';
import {MyText} from '../../components/myText/MyText.component';
import {LANGUAGE} from '../../constants/languages';
import {AppLayout} from '../layout/App.layout';

export const Welcome = (navigation: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppLayout>
        <View style={styles.container__center}>
          <MyText myText={LANGUAGE.welcome.started} variant="title" />
        </View>
        <View style={[styles.container__center, {marginTop: SPACING.medium}]}>
          <MyText
            myText={LANGUAGE.welcome.content}
            variant="normal"
            lineHeight={SPACING.xlarge}
            textAlign="center"
          />
        </View>
      </AppLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__center: {
    alignItems: 'center',
  },
});
