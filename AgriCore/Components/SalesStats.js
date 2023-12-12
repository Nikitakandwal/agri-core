import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { format, addDays, subDays, addWeeks, subWeeks, addMonths, subMonths, addYears, subYears } from 'date-fns';

const SalesStats = (props) => {
  const [selectedOption, setSelectedOption] = useState('Day');
  const [currentDate, setCurrentDate] = useState(new Date());
  

  const changeDate = (direction) => {
    let newDate;

    switch (direction) {
      case '<':
        newDate =
          selectedOption === 'Day'
            ? subDays(currentDate, 1)
            : selectedOption === 'Week'
            ? subWeeks(currentDate, 1)
            : selectedOption === 'Month'
            ? subMonths(currentDate, 1)
            : subYears(currentDate, 1);
        break;
      case '>':
        newDate =
          selectedOption === 'Day'
            ? addDays(currentDate, 1)
            : selectedOption === 'Week'
            ? addWeeks(currentDate, 1)
            : selectedOption === 'Month'
            ? addMonths(currentDate, 1)
            : addYears(currentDate, 1);
        break;
      default:
        newDate = currentDate;
    }

    setCurrentDate(newDate);
  };

  const changeOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <View style={{flexDirection:"row", justifyContent:"center"}}>
        <TouchableOpacity onPress={() => changeDate('<')}>
          <Text>{'<'}</Text>
        </TouchableOpacity>
        <Text>{format(currentDate, 'MMMM dd, yyyy')}</Text>
        <TouchableOpacity onPress={() => changeDate('>')}>
          <Text>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        {['Day', 'Week', 'Month', 'Year'].map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => changeOption(option)}
            style={{
              fontWeight: selectedOption === option ? 'bold' : 'normal',
              textDecorationLine: selectedOption === option ? 'underline' : 'none',
            }}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {/* Circle for today's earning and estimated earning */}
        <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'blue' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>{props.todaysEarnings}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        {/* Cards */}
        <View>
          <Text>Today's Sale</Text>
          <Text>{props.todaySale.units}</Text>
          <Text>{props.todaySale.cost}</Text>
        </View>
        <View>
          <Text>Pending Orders</Text>
          <Text>{props.pendingOrders.count}</Text>
          <Text>{props.pendingOrders.price}</Text>
        </View>
        <View>
          <Text>Stocks</Text>
          <Text>{props.totalStockUnits}</Text>
        </View>
        <View>
          <Text>Least Sold</Text>
          <Text>{props.leastSoldProduct}</Text>
        </View>
      </View>
    </View>
  );
};

export default SalesStats;
