import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

const AddressModal = ({ isVisible, onClose, onSave, currentAddress }) => {
  const [newAddress, setNewAddress] = useState(currentAddress);

  const handleSave = () => {
    onSave(newAddress);
    onClose();
  };

  const ListItem = ({ id, onSelect, isSelected }) => {
    return (
      <View
        style={{
          height: 144, 
          marginLeft: '-3%',
          backgroundColor: '#F1F1F1',
          marginVertical: '1%',
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              backgroundColor: isSelected ? '#FFFFFF' : '#33333330',
              borderRadius: 50,
              margin: '5%',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#33333330',
              borderWidth: 1,
            }}
            onPress={() => onSelect(id)}
          >
            {isSelected && (
              <View
                style={{
                  height: 12,
                  width: 12,
                  backgroundColor: '#333333',
                  borderRadius: 50,
                  margin: '5%',
                }}
              />
            )}
          </TouchableOpacity>
  
          <View style={{ marginVertical: '3%' }}>
            <Text style={{ marginVertical: '2%', color: '#414141', fontWeight: '700' }}>Aditya Singh </Text>
            <Text style={{ marginVertical: '2%' }}>154-A, pocket - F, Delhi</Text>
            <Text style={{ marginVertical: '2%', fontSize: 10 }}>New Delhi, Delhi - 110019</Text>
            <Text style={{ marginVertical: '2%', fontSize: 10 }}>Contact number: 7503243291</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FBFBFB',
                  height: 20,
                  width: 67,
                  borderColor: '#00000020',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginRight: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: '7%',
                }}
              >
                <Text style={{ fontSize: 10, color: '#414141' }}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FBFBFB',
                  height: 20,
                  width: 67,
                  borderColor: '#00000020',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginRight: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: '7%',
                }}
              >
                <Text style={{ fontSize: 10, color: '#414141' }}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginVertical: '4%', marginHorizontal: '13%'}}>
            <Icon name="trash" size={20} color="#414141"   />
            {isSelected && (
              <View
                style={{
                  height: 30,
                  width: 55,
                  backgroundColor: '#FBFBFB',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#33333310',
                  marginVertical: '35%',
                  left:"-35%"
                }}
              >
                <Text style={{ fontSize: 10, color: '#414141', textAlign: 'center' }}>Delivering Here</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const listItems = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    // Add more items as needed
  ];
  return (
    <Modal
      transparent
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "3%",
            }}
          >
            <Text style={styles.modalTitle}>Select Delivery Address</Text>
           <TouchableOpacity  onPress={onClose}><Image source={require("../assets/icons/cross.png")} /></TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={{ textAlign: "right", fontWeight: "bold" }}>
              +Add New Address
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: 144,
              width: 375,
              marginLeft: "-3%",
              backgroundColor: "#F1F1F1",
              marginVertical: "1%",
            }}
          >
            <View>
      {listItems.map((item) => (
        <ListItem
          key={item.id}
          isSelected={selectedId === item.id}
          onSelect={() => handleSelect(item.id)}
        />
      ))}
    </View>
     
         </View>
          
        </View>
        <View style={{height:73, width:"100%", backgroundColor:"#E8ECE6", justifyContent:"center", alignItems:"center"}}>
        <TouchableOpacity style={{backgroundColor:"#425343", height:50, width:325, borderRadius:10, justifyContent:"center"}}><Text style={{color:"#FFFFFF", fontSize:16, fontWeight:"600", textAlign:"center"}}>Add New Address</Text></TouchableOpacity>
      </View>
      </View>
     
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 375,
    height: "90%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addressInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cancelButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "#414141",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default AddressModal;
