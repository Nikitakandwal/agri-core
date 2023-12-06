import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DropdownButton = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    if (buttonRef.current) {
      buttonRef.current.measureInWindow((x, y, width, height) => {
        setModalPosition({ x, y: y + height });
      });
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  return (
    <View>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={styles.buttonContainer}
        ref={buttonRef}
      >
        <Text style={styles.buttonText}>{selectedValue || '3 options'}</Text>
        <Icon name={isDropdownOpen ? 'caret-up' : 'caret-down'} size={10} color="#000" />
      </TouchableOpacity>

      <Modal
        visible={isDropdownOpen}
        transparent={true}
        animationType="slide"
      >
        <View style={[styles.modalContainer, { top: modalPosition.y, left: modalPosition.x }]}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedValue(item.value);
                  setIsDropdownOpen(false);
                }}
              >
                <Text style={styles.modalItem}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 70,
    height: 25,
    backgroundColor: '#f3f3f3',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderColor: '#0000001A',
    borderWidth: 0.5,
    borderRadius:3
  },
  buttonText: {
    fontSize: 10,
    color: '#000',
  },
  modalContainer: {
    position: 'absolute',
    width: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  modalItem: {
    fontSize: 10,
    color: '#000',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default DropdownButton;
