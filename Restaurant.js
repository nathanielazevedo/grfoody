/** @format */

import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Restaurant = ({item}) => {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.image} source={{uri: item.image}}>
      <View style={styles.child}></View>
      <Ionicons
        style={styles.info}
        name="information-circle-outline"
        size={30}
        color="lightgray"
        onPress={() => {
          navigation.navigate('infopage', {
            item: item,
          });
        }}
      />
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate('webpage', {
            url: item.website,
            title: item.name,
          });
        }}>
        {item.name}
      </Text>
    </ImageBackground>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  child: {
    flex: 1,
    width: 350,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1,
  },
  image: {
    height: 100,
    width: 350,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    position: 'absolute',
    color: 'white',
    zIndex: 2,
    fontSize: 25,
    fontWeight: 'bold',
  },
  info: {
    position: 'absolute',
    top: 2,
    right: 2,
    zIndex: 2,
  },
});
