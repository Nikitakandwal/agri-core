import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BlogComponent = () => {
  const data = [
    { id: '1', title: 'How a farmer from Nashik grew 195 quintal onion', image: require('../assets/img/Rectangle.png') },
    { id: '2', title: 'All you need to know about grape farming in India', image: require('../assets/img/Rectangle.png') },
    { id: '3', title: 'How a farmer from Nashik grew 195 quintal onion', image: require('../assets/img/Rectangle.png') },
    { id: '4', title: 'How a farmer from Nashik grew 195 quintal onion', image: require('../assets/img/Rectangle.png') },
  ];

  const renderBlogCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <TouchableOpacity style={styles.readButton}>
        <Text style={styles.readButtonText}>Read</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blogs that catch your eye</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderBlogCard}
        contentContainerStyle={styles.cardsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#414141',
    marginLeft:25,
    marginTop:20,
    marginBottom:10
  },
  cardsContainer: {
    margin:10,
    paddingRight:20
  },
  card: {
    height: 247,
    width: 126,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    overflow: 'hidden',
    
  },
  cardImage: {
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 12,
    width: 86,
    position: 'absolute',
    top: '60%',
    left:'8%',
    fontWeight:'bold',
    color: '#ffffff',
  },
  readButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 22,
    width: 54,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  readButtonText: {
    fontSize: 10,
    color: '#333333',
    fontWeight:'700'
  },
});

export default BlogComponent;
