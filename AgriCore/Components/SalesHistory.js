// SalesHistory.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const data = {
  labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
  datasets: [
    {
      data: [20, 45, 30, 25, 40],
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // color for the first dataset
    },
    {
      data: [10, 25, 15, 35, 20],
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // color for the second dataset
    },
    {
      data: [30, 15, 25, 20, 10],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // color for the third dataset
    },
    {
      data: [15, 30, 10, 5, 25],
      color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`, // color for the fourth dataset
    },
    {
      data: [25, 10, 20, 15, 30],
      color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // color for the fifth dataset
    },
  ],
};

const SalesHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales History</Text>
      <BarChart
        data={data}
        width={300}
        height={200}
        yAxisLabel="Value"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        showBarTops={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default SalesHistory;
