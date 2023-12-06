// SearchPage.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native'; 
import Voice from 'react-native-voice';

const VoiceSearchBar = ({ placeholder, onVoiceSearch, onChangeText }) => {
    const [isListening, setIsListening] = useState(false);
  
    const startVoiceRecognition = async () => {
      try {
        await Voice.start('en-US');
        setIsListening(true);
      } catch (error) {
        console.error(error);
      }
    };
  
    const stopVoiceRecognition = async () => {
      try {
        await Voice.stop();
        setIsListening(false);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleVoiceResults = (e) => {
      const voiceText = e.value[0];
      onVoiceSearch(voiceText);
    };
  
    Voice.onSpeechResults = handleVoiceResults;
  
    return (
      <View style={styles.voiceContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        <TouchableOpacity
          style={styles.voiceIcon}
          onPress={isListening ? stopVoiceRecognition : startVoiceRecognition}
        >
          {/* You can use a microphone icon or any other icon you prefer */}
          <Text>{isListening ? '🎙️' : '🎤'}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [popularSearches, setPopularSearches] = useState(['iPhone', 'Shoes', 'Laptop']);
  const [savedProducts, setSavedProducts] = useState(['Product A', 'Product B']);

  const handleSearch = (text) => {
    // Update search history
    setSearchHistory((prevHistory) => [...prevHistory, text]);

    // Implement your search logic here and update search results
    // For example, you might fetch search results from an API based on the search text
    // For now, let's assume you have an array of products for demonstration
    const mockSearchResults = ['Product 1', 'Product 2', 'Product 3'];
    setSearchResults(mockSearchResults);

    // Update other sections (e.g., popular searches, saved products) as needed
  };

  const handleVoiceSearch = (voiceText) => {
    setSearchText(voiceText);
    handleSearch(voiceText);
  };

  return (
    <View style={styles.container}>
      <VoiceSearchBar
        placeholder="Search products"
        onChangeText={(text) => setSearchText(text)}
        onVoiceSearch={handleVoiceSearch}
      />

      {/* Display Search Results */}
      <Text style={styles.sectionTitle}>Search Results</Text>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />

      {/* Display Search History */}
      <Text style={styles.sectionTitle}>Search History</Text>
      <FlatList
        data={searchHistory}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => `${item}-${index}`}
      />

      {/* Display Popular Searches */}
      <Text style={styles.sectionTitle}>Popular Searches</Text>
      <FlatList
        data={popularSearches}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />

      {/* Display Saved Products */}
      <Text style={styles.sectionTitle}>Saved Products</Text>
      <FlatList
        data={savedProducts}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  voiceContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  voiceIcon: {
    marginLeft: 10,
  },
});

export default SearchPage;
