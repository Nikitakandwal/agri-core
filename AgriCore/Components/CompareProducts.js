import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompareProducts = ({ products }) => {
  const attributes = ['Name', 'Brand', 'Delivery By', 'Size', 'Usage', 'Price'];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Compare Products</Text>
      <View style={styles.tableContainer}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <View style={styles.tableCell} />
          {products.map((product, index) => (
            <View key={index} style={styles.tableCell}>
              <Text style={styles.productName}>{product.name}</Text>
            </View>
          ))}
        </View>

        {/* Table Body */}
        {attributes.map((attribute, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.attribute}>{attribute}</Text>
            </View>
            {products.map((product, productIndex) => (
              <View key={productIndex} style={styles.tableCell}>
                <Text style={styles.attributeValue}>{product[attribute.toLowerCase()]}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 16,
  },
  tableContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderColor: 'rgba(51, 51, 51, 0.1)',
    borderWidth: 1,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(51, 51, 51, 0.1)',
  },
  tableCell: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontWeight: 'bold',
    color: '#333333',
  },
  attribute: {
    color: '#333333',
  },
  attributeValue: {
    color: '#666666',
  },
});

export default CompareProducts;
