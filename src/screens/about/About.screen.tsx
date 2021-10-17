import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../../components/myText/MyText.component';
import {LANGUAGE} from '../../constants/languages';
import {AppLayout} from '../layout/App.layout';
import AlertPicture from '../../assets/imgs/alerte.png';
import FaireUnDon from '../../assets/imgs/heart.png';
import {FlatList} from 'react-native-gesture-handler';
import {DONS} from '../../services/dons.service';
import {Don} from '../../components/don/Don.component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMobile} from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppLayout>
        <View style={{justifyContent: 'flex-start'}}>
          <View style={styles.container__card}>
            <View style={{flexDirection: 'row'}}>
              <Image source={AlertPicture} style={{width: 40, height: 40}} />
              <View style={styles.container__center}>
                <MyText
                  fontWeight="bold"
                  fontSize={16}
                  myText={LANGUAGE.others.app}
                  variant="title"
                />
                <MyText myText={LANGUAGE.others.name} variant="title" />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: SPACING.small,
                marginTop: SPACING.medium,
              }}>
              <FontAwesomeIcon icon={faMobile} size={40} />
              <View style={styles.container__center}>
                <MyText
                  fontWeight="bold"
                  fontSize={16}
                  myText={LANGUAGE.others.version}
                  variant="title"
                />
                <MyText myText={LANGUAGE.others.v} variant="title" />
              </View>
            </View>
          </View>
          <View style={[{marginVertical: SPACING.medium}]}>
            <View style={styles.container__don}>
              <Image
                source={FaireUnDon}
                style={{width: 40, height: 40, marginRight: SPACING.small}}
              />
              <MyText
                fontWeight="bold"
                myText="Faire un don"
                textAlign="center"
                color="#000"
              />
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
    // alignItems: 'center',
    marginLeft: SPACING.small,
    justifyContent: 'center',
  },
  container__card: {
    backgroundColor: '#fff',
    elevation: 5,
    padding: SPACING.small,
    marginBottom: SPACING.xmedium,
  },
  container__don: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
