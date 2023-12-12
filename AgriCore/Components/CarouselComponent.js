import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
const carouselItemWidth = 375;

const data = [
  { id: 1, image: require('../assets/img/Slide.png') },
  { id: 2, image: require('../assets/img/Slide.png') },
  { id: 3, image: require('../assets/img/Slide.png') },
  { id: 4, image: require('../assets/img/Slide.png') },
];

const CarouselComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const renderCarouselItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderCarouselItem}
        sliderWidth={width}
        itemWidth={carouselItemWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop
        autoplay
        autoplayInterval={3000} 
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 201,
    position: 'relative',
    width:width*1
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: width*1
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dotStyle: {
    width: 27,
    height: 3,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  inactiveDotStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export default CarouselComponent;
