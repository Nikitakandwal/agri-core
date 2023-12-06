import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Breadcrumb = ({ items, onItemClick }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.crumb}
          onPress={() => onItemClick(item)}
          activeOpacity={0.7}
        >
          <Text style={styles.crumbText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  crumb: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    marginRight: 5,
  },
  crumbText: {
    color: '#333',
  },
});

const BreadCrumb = () => {
    const handleBreadcrumbClick = (item) => {
      // Handle navigation or any other action based on the clicked breadcrumb item
      console.log(`Navigate to ${item}`);
    };
  
    const breadcrumbItems = ['Home', 'Category', 'Subcategory', 'Product']; // Replace with your actual breadcrumb items
  
    return (
      <View>
        <Breadcrumb items={breadcrumbItems} onItemClick={handleBreadcrumbClick} />
      </View>
    );
  };
  
export default BreadCrumb;
