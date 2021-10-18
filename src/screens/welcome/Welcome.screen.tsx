import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {SPACING} from '../../assets/themes/globals';
import {MyButton} from '../../components/myButton/MyButton.component';
import {MyText} from '../../components/myText/MyText.component';
import {LANGUAGE} from '../../constants/languages';
import {AppLayout} from '../layout/App.layout';
import AlertPicture from '../../assets/imgs/alerte.png';
import {ScrollView} from 'react-native-gesture-handler';

export const Welcome = (navigation: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppLayout>
        <View style={{flex: 3, justifyContent: 'center'}}>
          <View style={styles.container__center}>
            <Image source={AlertPicture} style={{width: 150, height: 150}} />
            <View
              style={[styles.container__center, {marginTop: SPACING.medium}]}>
              <MyText
                myText={LANGUAGE.welcome.started}
                variant="title"
                fontWeight="bold"
                fontSize={SPACING.large}
              />
            </View>
          </View>
          <View style={[styles.container__center, {marginTop: SPACING.small}]}>
            <MyText
              myText={LANGUAGE.welcome.content}
              variant="normal"
              lineHeight={SPACING.xlarge}
              textAlign="center"
              fontSize={14}
            />
          </View>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <View style={{height: SPACING.buttonHeight}}>
            <MyButton
              myText={LANGUAGE.welcome.start}
              navigationName={() => navigation.navigation.navigate('home')}
            />
          </View>
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
