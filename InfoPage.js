import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const InfoPage = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.name,
    });
  }, [navigation]);
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.foodTypes}</Text>
      <Text>{item.locationTypes}</Text>
      <Text>{item.eatTypes}</Text>
    </View>
  );
};

export default InfoPage;

const styles = StyleSheet.create({});
