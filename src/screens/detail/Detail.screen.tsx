import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../../components/myText/MyText.component';
import {Region} from '../../components/region/Region.component';
import {LANGUAGE} from '../../constants/languages';
import {RegionService} from '../../services/regions.service';
import {AppLayout} from '../layout/App.layout';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

export const Detail = (props?: any) => {
  const regionId = props.route.params.id;
  const [region, setRegion] = useState([]);
  const [loader, setLoader] = useState(false);

  console.log('MY REGION::::::', region);

  useEffect(() => {
    const fetchData = async () => {
      const result = await RegionService.regions(`${regionId}`);
      setLoader(true);
      setRegion(await result.data);
      await result;
    };
    fetchData();
  }, []);

  if (loader === false) {
    return (
      <View style={styles.container__loading}>
        <ActivityIndicator size={40} color={COLOR.primaryColor} />
      </View>
    );
  }
  if (loader === true) {
    if (region.length == 0) {
      return (
        <View style={styles.container__empty}>
          <FontAwesomeIcon
            size={70}
            color={COLOR.primaryColor}
            icon={faCheckCircle}
          />
          <View style={{width: 230, marginTop: SPACING.small}}>
            <MyText
              variant="normal"
              fontWeight="normal"
              color={COLOR.tilteTextColor}
              myText={LANGUAGE.others.empty}
              textAlign="center"
              lineHeight={20}
              fontSize={15}
            />
          </View>
        </View>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <AppLayout>
            <FlatList
              data={region}
              showsVerticalScrollIndicator={false}
              numColumns={1}
              renderItem={({item, index}) => <Region data={item} />}
            />
          </AppLayout>
        </SafeAreaView>
      );
    }
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__empty: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  container__loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
