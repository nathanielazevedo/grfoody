import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';


const Webpage = ({route}) => {
    const { url, title } = route.params;
     const navigation = useNavigation();
    
      useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle: title,
        });
      }, [navigation]);
  return (
    <WebView
      originWhitelist={['*']}
      source={{
        uri: url,
      }}
    />
  );
};

export default Webpage;

const styles = StyleSheet.create({});
