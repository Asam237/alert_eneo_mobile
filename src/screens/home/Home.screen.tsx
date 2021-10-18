import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyItem} from '../../components/items/Item.component';
import {LANGUAGE} from '../../constants/languages';
import {navigate} from '../../navigations/app.navigation';
import {ITEMS} from '../../services/items.service';
import {AppLayout} from '../layout/App.layout';

export const Home = (navigation?: any) => {
  const [myData, setMyData] = useState([]);
  const toDetail = async (value?: number) => {
    navigation.navigation.navigate('detail', await myData[value]);
  };

  console.log('MYDATAA:::::', myData);

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await RegionService.regions('2');
    setMyData(ITEMS);

    const backAction = () => {
      Alert.alert(
        `${LANGUAGE.others.alertTitle}`,
        `${LANGUAGE.others.alertContent}`,
        [
          {
            text: `${LANGUAGE.others.no}`,
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: `${LANGUAGE.others.yes}`,
            onPress: () => BackHandler.exitApp(),
          },
        ],
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  console.log(
    'NVG::::',
    navigation.navigation.addListener(() => navigation.navigation.goBack(null)),
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppLayout>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ITEMS}
            numColumns={1}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  console.log('INDEX ICI', index);
                  console.log('ITEM ICI', item);
                  toDetail(index);
                }}>
                <MyItem data={item} />
              </TouchableOpacity>
            )}
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
});
