import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {Region} from '../../components/region/Region.component';
import {RegionService} from '../../services/regions.service';
import {AppLayout} from '../layout/App.layout';

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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={40} color={COLOR.primaryColor} />
      </View>
    );
  }
  if (loader === true) {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
