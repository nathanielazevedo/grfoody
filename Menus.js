import React, {useLayoutEffect, useState, useEffect, useRef} from 'react';
import {StyleSheet, FlatList, View, Text, TextInput} from 'react-native';
import restaurants from './data';
import Restaurant from './Restaurant';
import Evillcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Option from './Option';
import initialFilters from './filters';

const renderItem = ({item}) => {
  return <Restaurant item={item} />;
};
let resetFilter = JSON.parse(JSON.stringify(initialFilters));

const Menus = ({navigation}) => {
  const [filterStatus, setFilterStatus] = useState(false);
  const [searchStatus, setSearchStatus] = useState(false);
  const [term, setTerm] = useState('');
  const [data, setData] = useState(restaurants);
  const [filters, setFilters] = useState(initialFilters);
  const [chosenFilters, setChosenFilters] = useState([]);
  //Tracks number of renders
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  console.log('render' + renderCount.current, term);
  //keeps an eye on filter open or close status
  useEffect(() => {
    if (renderCount.current == 1) return;
    console.log('fires open fitler on filterStatus change');
    if (filterStatus) {
      openFilter();
    } else {
      closeFilter();
    }
  }, [filterStatus]);

  //keeps an eye on search open or close status
  useEffect(() => {
    if (renderCount.current == 1) return;
    console.log('firese open search on searchStatus change');
    if (searchStatus) {
      openSearch();
    } else {
      closeSearch();
    }
  }, [searchStatus]);

  useEffect(() => {
    if (renderCount.current == 1) return;
    console.log('perofrms filtering on chosenFilters change');
    if (chosenFilters.length == 0) {
      setData(restaurants);
      return;
    }
    setData(
      restaurants
        .filter(restaurant => {
          let arr = [];
          for (let each of chosenFilters) {
            if (restaurant.filters.includes(each)) {
              arr.push(each)
            }
          }
          if (arr.length == chosenFilters.length) {
            return restaurant;
          }
        })
        .map(
          ({
            id,
            name,
            website,
            image,
            filters,
            locationTypes,
            eatTypes,
            foodTypes,
          }) => {
            return {
              id,
              name,
              website,
              image,
              filters,
              locationTypes,
              eatTypes,
              foodTypes,
            };
          },
        ),
    );
  }, [chosenFilters]);

  //opens the filter
  const openFilter = () => {
    console.log('opens filter');
    navigation.setOptions({
      headerTitle: '',
      headerTintColor: 'black',
      headerStyle: {
        height: 320,
      },
      headerRight: () => (
        <View style={styles.filterClose}>
          <Evillcons
            name="close"
            size={30}
            color="black"
            onPress={() => setFilterStatus(false)}
          />
        </View>
      ),
      headerLeft: () => (
        <View style={styles.filterList}>
          <Text>Food Type:</Text>
          <View style={styles.options}>
            {filters.foodTypes.map(m => {
              return (
                <Option
                  key={m.type}
                  info={m}
                  chosenFilters={chosenFilters}
                  setChosenFilters={setChosenFilters}
                  chooseOption={(x, y) => chooseOption(x, y)}
                  type="foodTypes"
                />
              );
            })}
          </View>
          <Text>Location:</Text>
          <View style={styles.options}>
            {filters.locationTypes.map(m => {
              return (
                <Option
                  key={m.type}
                  info={m}
                  chosenFilters={chosenFilters}
                  setChosenFilters={setChosenFilters}
                  chooseOption={(x, y) => chooseOption(x, y)}
                  type="locationTypes"
                />
              );
            })}
          </View>
          <Text>Serve Type:</Text>
          <View style={styles.options}>
            {filters.eatTypes.map(m => {
              return (
                <Option
                  key={m.type}
                  setChosenFilters={setChosenFilters}
                  info={m}
                  chosenFilters={chosenFilters}
                  chooseOption={x => chooseOption(x)}
                  type="eatTypes"
                />
              );
            })}
          </View>
          <View style={styles.filterSetContainer}>
            <Text
              style={styles.clearFilters}
              onPress={() => {
                setChosenFilters([]);
              }}>
              Clear Filters
            </Text>
          </View>
        </View>
      ),
    });
  };

  //select a filter option
  const chooseOption = x => {
    console.log('choose filter option');
    setChosenFilters(old => {
      return [...old, x];
    });
  };

  useEffect(() => {
    if (renderCount.current == 1) return;
    console.log('opens filter on filter status change');
    openFilter();
  }, [chosenFilters]);

  //waits for search term to change, performs search
  useEffect(() => {
    if (renderCount.current == 1) return;
    console.log('performs search on term change');
    const search = () => {
      if (term == '' || !term) {
        setData(restaurants);
      } else {
        setData(
          restaurants
            .filter(item => {
              return item.name.includes(term);
            })
            .map(({id, name, website, image}) => {
              return {id, name, website, image};
            }),
        );
      }
    };
    search();
  }, [term]);

  //close the search bar
  const closeSearch = () => {
    console.log('closesearch');
    setTerm('');
    navigation.setOptions({
      headerTintColor: 'black',
      headerTitle: 'Menus',
      headerRight: () => (
        <View style={{marginRight: 15, color: 'black'}}>
          <FontAwesome
            name="sliders"
            size={25}
            color="gray"
            onPress={() => setFilterStatus(true)}
          />
        </View>
      ),
      headerLeft: () => (
        <View style={{marginLeft: 15, color: 'black'}}>
          <Evillcons
            name="search"
            size={30}
            color="black"
            onPress={() => setSearchStatus(true)}
          />
        </View>
      ),
    });
  };

  //close the filter
  const closeFilter = () => {
    console.log('closefilter');
    navigation.setOptions({
      headerStyle: {
        height: 90,
      },
      headerTintColor: 'black',
      headerTitle: 'Menus',
      headerRight: () => (
        <View style={{marginRight: 15, color: 'black'}}>
          <FontAwesome
            name="sliders"
            size={25}
            color="gray"
            onPress={() => {
              setFilterStatus(true);
            }}
          />
        </View>
      ),
      headerLeft: () => (
        <View style={{marginLeft: 15, color: 'black'}}>
          <Evillcons
            name="search"
            size={30}
            color="black"
            onPress={() => setSearchStatus(true)}
          />
        </View>
      ),
    });
  };

  //Open the search bar
  const openSearch = () => {
    console.log('opensearch');
    navigation.setOptions({
      headerTitle: '',
      headerTintColor: 'black',
      headerRight: () => (
        <View style={{marginRight: 15, color: 'black'}}>
          <TextInput
            autoFocus
            placeholder="Search"
            style={styles.input}
            defaultValue={term}
            onChangeText={text => {
              setTerm(text);
            }}
            type="text"></TextInput>
        </View>
      ),
      headerLeft: () => (
        <View style={{marginLeft: 15, color: 'black'}}>
          <Evillcons
            name="close"
            size={30}
            color="black"
            onPress={() => setSearchStatus(false)}
          />
        </View>
      ),
    });
  };

  //sets the initial header
  useLayoutEffect(() => {
    console.log('layout');
    navigation.setOptions({
      headerStyle: {
        height: 90,
      },
      headerTitleStyle: {
        fontSize: 20,
      },
      headerTintColor: 'black',
      headerTitle: 'Menus',
      headerRight: () => (
        <View style={{marginRight: 15, color: 'black'}}>
          <FontAwesome
            name="sliders"
            size={25}
            color="gray"
            onPress={() => setFilterStatus(true)}
          />
        </View>
      ),
      headerLeft: () => (
        <View style={{marginLeft: 15, color: 'black'}}>
          <Evillcons
            name="search"
            size={30}
            color="black"
            onPress={() => setSearchStatus(true)}
          />
        </View>
      ),
    });
  }, []);

  return (
    <FlatList
      contentContainerStyle={{alignItems: 'center', backgroundColor: 'white'}}
      data={data}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={item => item.id}></FlatList>
  );
};

export default Menus;

const styles = StyleSheet.create({
  input: {
    width: 320,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  filterClose: {
    position: 'absolute',
    top: 7,
    right: 7,
  },
  filterList: {
    color: 'black',
    marginLeft: 25,
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 350,
  },
  setFilters: {
    color: 'white',
  },
  clearFilters: {
    color: 'white',
  },
  filterSetContainer: {
    width: 320,
    height: 30,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
