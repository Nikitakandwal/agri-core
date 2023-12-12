import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { BASE_URL } from '../src/Backend';



const RegistrationScreen = () => {
  const [isOnStep1, setOnStep1] = useState(true);
  const [showProductSelection, setShowProductSelection] = useState(false);
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [shopName, setShopName] = useState('');
  const [recoveryContact, setRecoveryContact] = useState('');
  const [location, setLocation] = useState('');
  const [GSTIN, setGSTIN] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const ProductSelectionScreen = ({ onClose }) => {

    const products = [
      { id: '1', name: 'Product 1' },
      { id: '2', name: 'Product 2' },
      { id: '3', name: 'Product 3' },
      { id: '4', name: 'Product 4' },
      { id: '5', name: 'Product 5' },
      { id: '6', name: 'Product 6' },
      { id: '7', name: 'Product 7' },
      { id: '8', name: 'Product 8' },

    ];

    const toggleItemSelection = (itemId) => {
      const isSelected = selectedItems.includes(itemId);
      if (isSelected) {
        setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== itemId));
      } else {
        setSelectedItems((prevSelected) => [...prevSelected, itemId]);
      }
    };

    const renderItem = ({ item }) => {
      const isSelected = selectedItems.includes(item.id);
      return (
        <TouchableOpacity
          style={[styles.itemContainer, isSelected && styles.selectedItem, {}]}
          onPress={() => toggleItemSelection(item.id)}
        >
          <Image style={{ width: 91, height: 91 }} source={require('./../assets/img/Glycel.png')} />
          <Text style={[styles.itemText, { color: isSelected ? "white" : "black", marginVertical: 10 }]}>{item.name}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <ScrollView style={styles.productSelectionContainer} showsVerticalScrollIndicator={false}>
        {/* Top 10% with color #266937 */}
        <View style={styles.topSection} />

        {/* Heading */}
        <Text style={styles.heading}>Select any 5 products to continue</Text>

        {/* Description */}
        <Text style={styles.description}>
          This will help us in understanding what you are looking to purchase.
        </Text>

        {/* Product List */}
        <View style={{
          justifyContent: "center", alignItems: "center", alignContent: "center", marginBottom: "50%"
        }}>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.productListContainer}
          />

        </View>

        {/* Proceed to Home Button */}
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => {
            console.log('Proceed to Home with selected items:', selectedItems);
            onClose();
            handleData()
          }}
        >
          <Text style={styles.buttonText}>Proceed to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const handleData = async () => {
    // Collect data from the form
    const registrationData = {
      fullName,
      contactNumber,
      gender,
      city,
      emailAddress,
      shopName,
      recoveryContact,
      location,
      GSTIN,
      selectedItems
      // Add other fields as needed for your use case
    };

    try {
      // Send data to the backend
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
      console.log(response, "tet");
      if (response.ok) {
        console.log('Registration successful');
        // Handle navigation or other actions after successful registration
      } else {
        console.error('Registration failed');
        // Handle error cases
      }
    } catch (error) {
      console.error('Error connecting to the server', error);
      // Handle network or server connection errors
    }
  };


  const handleContinue = () => {
    if (isOnStep1) {
      setOnStep1(false);
    } else {
      // Step 2: Handle any Step 2 logic here

      // Show ProductSelectionScreen
      setShowProductSelection(true);
    }
  };

  const handleCloseProductSelection = () => {
    setShowProductSelection(false);
  };

  return (
    <View style={styles.container}>
      {isOnStep1 ? (
        // Step 1
        <>
          {/* Top 10% with color #266937 */}
          <View style={styles.topSection} />

          {/* Step 1 of 2 */}
          <Text style={styles.stepText}>Step 1 of 2</Text>

          {/* Registration message */}
          <Text style={styles.messageText}>
            Registration made simpler and easier to save your time and efforts.
          </Text>

          {/* Form */}
          <View style={styles.formContainer}>
            {/* Full Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput style={styles.input} value={fullName}
                onChangeText={(text) => setFullName(text)} />
            </View>

            {/* Contact Number */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Contact Number</Text>
              <TextInput style={styles.input} value={contactNumber} keyboardType='numeric' maxLength={10}
                onChangeText={(text) => setContactNumber(text)} />
            </View>

            {/* Gender and City */}
            <View style={styles.inlineInputsContainer}>
              <View style={styles.inlineInputContainer}>
                <Text style={styles.label} >Gender</Text>
                <TextInput style={styles.inlineInput} value={gender}
                  onChangeText={(text) => setGender(text)} />
              </View>
              <View style={styles.inlineInputContainer}>
                <Text style={styles.label}>City</Text>
                <TextInput style={styles.inlineInput} value={city}
                  onChangeText={(text) => setCity(text)} />
              </View>
            </View>

            {/* Email Address (optional) */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address (optional)</Text>
              <TextInput style={styles.input} value={emailAddress} keyboardType='email-address'
                onChangeText={(text) => setEmailAddress(text)} />
            </View>

            {/* Continue Button (TouchableOpacity) */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleContinue}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : showProductSelection ? (
        // Product Selection Screen
        <ProductSelectionScreen onClose={handleCloseProductSelection} />
      ) : (
        // Step 2
        <>
          {/* Top 10% with color #266937 */}
          <View style={styles.topSection} />

          {/* Step 2 of 2 */}
          <Text style={styles.stepText}>Step 2 of 2</Text>

          {/* Registration message for step 2 */}
          <Text style={styles.messageText}>
            You are almost done with the registration to explore new possibilities.
          </Text>

          {/* Add Profile Image */}
          <View style={styles.imageContainer}>
            <View style={styles.imagebackground}>
              <Image source={require('../assets/img/default_user_image.png')} style={styles.profileImage} />
            </View>
            <Text style={styles.addImageText}>Add Profile Image</Text>
          </View>

          {/* Form for step 2 */}
          <View style={styles.formContainer}>
            {/* Shop Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Shop Name</Text>
              <TextInput style={styles.input} value={shopName}
                onChangeText={(text) => setShopName(text)} />
            </View>

            {/* Recovery Contact Number */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Recovery Contact Number</Text>
              <TextInput style={styles.input} value={recoveryContact}
                onChangeText={(text) => setRecoveryContact(text)} />
            </View>

            {/* Location */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Location</Text>
              <TextInput style={styles.input} value={location}
                onChangeText={(text) => setLocation(text)} />
            </View>

            {/* GSTIN */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>GSTIN</Text>
              <TextInput style={styles.input} value={GSTIN}
                onChangeText={(text) => setGSTIN(text)} />
            </View>

            {/* Create Account Button (TouchableOpacity) */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => { handleContinue(); }}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    height: '10%',
    backgroundColor: '#266937',
  },
  stepText: {
    fontSize: 16,
    color: '#333333',
    opacity: 0.8,
    marginVertical: 10,
    fontWeight: "700",
    marginHorizontal: 15
  },
  messageText: {
    fontSize: 12,
    color: '#333333',
    marginHorizontal: 15,
    fontWeight: "500",
    color: "#333333",
    lineHeight: 16

  },
  formContainer: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inlineInputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inlineInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: '#333333',
    opacity: 0.3,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    fontSize: 16,
    paddingVertical: 5,
  },
  inlineInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    fontSize: 16,
    paddingVertical: 5,
  },
  button: {
    width: 193,
    height: 50,
    backgroundColor: '#8E8989',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "600"
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagebackground: {
    width: 71,
    height: 71,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  addImageText: {
    fontSize: 16,
    color: '#333333',
  },
  productSelectionContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15
  },
  description: {
    fontSize: 12,
    fontWeight: "400",
    color: '#333333',
    marginBottom: 20,
    marginHorizontal: 15
  },
  productListContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  itemContainer: {
    width: '40%',

    margin: 10,
    padding: 15,
    // borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    alignItems: 'center',
    // borderWidth: 1,
    width: "45%"
  },
  selectedItem: {
    backgroundColor: '#266937',
    width: "45%",
    // borderWidth: 1
  },
  itemText: {
    fontSize: 10,
    fontWeight: "400",
    color: '#333333',
  },
  proceedButton: {
    width: 193,
    height: 50,
    backgroundColor: '#8E8989',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 20,
    borderRadius: 10,
    position: "absolute",
    bottom: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "600"
  },
});

export default RegistrationScreen;
