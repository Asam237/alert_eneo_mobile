import React from 'react';
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

export const Home = () => {
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
