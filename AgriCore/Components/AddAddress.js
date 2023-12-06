import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import Header from './Header' 



const AddAddress = () => {
    const [houseNo, setHouseNo] = useState('');
    const [apartment, setApartment] = useState('');
    const [directions, setDirections] = useState('');
    const [saveAs, setSaveAs] = useState('Home'); // Default value
  
    const WordLimitInput = ({   wordLimit }) => {
        const [text, setText] = useState('');
      
        const handleTextChange = (inputText) => {
          // Limit the input to the specified word count
          const words = inputText.trim().split(/\s+/);
          if (words.length <= wordLimit) {
            setText(inputText);
          }
        };
      
        return (
          <View style={styles.container}>
            <Text style={styles.label}>Directions to reach (optional)</Text>
            <TextInput 
              placeholder="e.g Ring the bell on the gate with om sticker"
              value={directions}
              onChangeText={(text) => setDirections(text)} 
              multiline 
              style={styles.inputBox}
            />
            <Text style={styles.wordCount}>{`${text.trim().split(/\s+/).length}/${wordLimit}`}</Text>
          </View>
        );
      };


  return (
    <ScrollView>
       <Header/> 
  
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 16, color:"#41414170" }}>
        Selected Delivery location
      </Text>
      <Text style={{color:"#414141", fontSize:20, fontWeight:"700"}}>{`${houseNo}`}</Text>
      <Text>{` ${houseNo} ${apartment}`}</Text> 
      <TextInput
        placeholder="House/Flat/Block no."
        value={houseNo}
        onChangeText={(text) => setHouseNo(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Apartment/Road/Area"
        value={apartment}
        onChangeText={(text) => setApartment(text)}
        style={styles.input}
      />
    
      <WordLimitInput wordLimit={200}/>

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 16 }}>
        SAVE AS
      </Text>

      <View style={styles.saveAsContainer}>
        <TouchableOpacity
          style={[styles.saveAsOption, saveAs === 'Home' && styles.selectedOption]}
          onPress={() => setSaveAs('Home')}
        >
          <Text style={[saveAs === 'Home' && styles.selectedText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.saveAsOption, saveAs === 'Work' && styles.selectedOption]}
          onPress={() => setSaveAs('Work')}
        >
          <Text style={[saveAs === 'Work' && styles.selectedText]}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.saveAsOption, saveAs === 'FriendsFamily' && styles.selectedOption]}
          onPress={() => setSaveAs('FriendsFamily')}
        >
          <Text style={[saveAs === 'FriendsFamily' && styles.selectedText]}>Friends and Family</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.saveAsOption, saveAs === 'Others' && styles.selectedOption]}
          onPress={() => setSaveAs('Others')}
        >
          <Text style={[saveAs === 'Others' && styles.selectedText]}>Others</Text>
        </TouchableOpacity>
      </View>
      
    </View> 
 
    <View style={{height:73, width:"100%", backgroundColor:"#E8ECE6", justifyContent:"center", alignItems:"center"}}>
        <TouchableOpacity style={{backgroundColor:"#425343", height:50, width:325, borderRadius:10, justifyContent:"center"}}><Text style={{color:"#FFFFFF", fontSize:16, fontWeight:"600", textAlign:"center"}}>Add New Address</Text></TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default AddAddress

const styles = StyleSheet.create({ 
    input: {
    height: 40, 
    marginBottom: 16,
    padding: 8,
    borderBottomWidth: 1,  
    borderColor: 'gray', 
    marginVertical:"4%"
  }, 
  saveAsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  saveAsOption: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#414141', 
  },
  selectedText:{  
    color:"#FFFFFF"
  },
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14, 
    marginBottom: 4,
    color:"#00000070",
    marginVertical:"8%"
  },
  inputBox: { 
    borderWidth: 1, 
    marginBottom: 4, 
    marginBottom: 16, 
    borderWidth: 1,  
    borderColor: 'gray', 
    height:135,
    borderRadius:6,
    backgroundColor:"#F4F4F4",    
    textAlignVertical: 'top',
  },
  wordCount: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
})