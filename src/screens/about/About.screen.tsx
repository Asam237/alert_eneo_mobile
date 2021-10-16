import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SPACING} from '../../assets/themes/globals';
import {MyText} from '../../components/myText/MyText.component';
import {LANGUAGE} from '../../constants/languages';
import {AppLayout} from '../layout/App.layout';
import AlertPicture from '../../assets/imgs/alerte.png';
import FaireUnDon from '../../assets/imgs/heart.png';
import {FlatList} from 'react-native-gesture-handler';
import {DONS} from '../../services/dons.service';
import {Don} from '../../components/don/Don.component';

export const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppLayout>
        <View style={{justifyContent: 'center'}}>
          <View style={styles.container__center}>
            <Image source={AlertPicture} style={{width: 100, height: 100}} />
            <View
              style={[styles.container__center, {marginTop: SPACING.medium}]}>
              <MyText myText={LANGUAGE.welcome.started} variant="title" />
            </View>
          </View>
          <View style={[styles.container__center, {marginTop: SPACING.small}]}>
            <MyText
              myText={LANGUAGE.welcome.content}
              variant="normal"
              lineHeight={SPACING.xlarge}
              textAlign="center"
            />
          </View>
          <View style={[{marginVertical: SPACING.xmedium}]}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image source={FaireUnDon} style={{width: 40, height: 40}} />
              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#000',
                  marginLeft: SPACING.small,
                }}>
                Faire un don
              </Text>
            </View>
            <FlatList
              numColumns={1}
              data={DONS}
              renderItem={({item, index}) => <Don data={item} />}
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
