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
import {RegionService} from '../../services/regions.service';
import {AppLayout} from '../layout/App.layout';

export const Home = () => {
  const [myData, setMyData] = useState([]);
  const toDetail = async (value?: number, props?: any) => {
    props.navigation.navigate('detailCoffee', await this.state.myData[value]);
  };

  useEffect(() => {
    const center = async (i: number) => {
      const result = await RegionService.regions(`${i}`);
      console.log('REGIONS NORD', [result.data.length]);
      await result;
    };

    center(0);
  });

  return (
    <SafeAreaView style={styles.container}>
      <AppLayout>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ITEMS}
            numColumns={1}
            renderItem={({item, index}) => (
              <TouchableOpacity>
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
