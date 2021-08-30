import React from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import specials from './specials';
import Special from './Special';

const renderItem = ({item}) => {
  return <Special item={item} />;
};

const Home = ({navigation}) => {
  return (
    <FlatList
      contentContainerStyle={{alignItems: 'center', backgroundColor: 'white'}}
      data={specials}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={item => item.id}></FlatList>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
