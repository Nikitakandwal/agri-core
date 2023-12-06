import React,{useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="rgba(51, 51, 51, 0.4)"
          fontSize={12}
          value={searchText}
          onChangeText={handleSearch}
        />
        <AntDesign name="search1" size={20} color="black" style={styles.icon} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: 325,
    height: 50,
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 12,
  },
  icon: {
    marginLeft: 10,
  },
});

export default SearchBar;
