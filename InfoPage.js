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
      <Text style={styles.title}>Type of food:</Text>
      <Text style={styles.info}>{item.foodTypes}</Text>
      <Text style={styles.title}>Restaurant Location:</Text>
      <Text style={styles.info}>{item.locationTypes}</Text>
      <Text style={styles.title}>Serve Type:</Text>
      <Text style={styles.info}>{item.eatTypes}</Text>
    </View>
  );
};

export default InfoPage;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 30,
    marginLeft: 10,
  },
  info: {
    marginLeft: 20,
    marginTop: 5,
  },
});
