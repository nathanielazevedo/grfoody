import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Option = ({info, chooseOption, chosenFilters, setChosenFilters}) => {
  console.log('render in');

  return (
    <View>
      <Text
        style={
          chosenFilters.includes(info.type) ? styles.clicked : styles.unclicked
        }
        onPress={() => {
          if (chosenFilters.includes(info.type)) {
            let index = chosenFilters.indexOf(info.type);
            chosenFilters.splice(index, 1);
            setChosenFilters([...chosenFilters]);
          } else {
            chooseOption(info.type);
          }
        }}>
        {' '}
        {info.type}
      </Text>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  clicked: {
    color: 'white',
    backgroundColor: 'black',
    padding: 5,
    margin: 5,
  },
  unclicked: {
    color: 'black',
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
  },
});
