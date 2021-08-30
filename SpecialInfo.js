import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useNavigation} from '@react-navigation/native';

const SpecialInfo = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: item.restaurant,
      });
    }, [navigation]);
  
  return (
    <View>
      <Text>{item.tag}</Text>
    </View>
  )
}

export default SpecialInfo

const styles = StyleSheet.create({})
