import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyItem} from '../../components/items/Item.component';
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
  }, []);

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
