import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AddtoCart = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: "green", marginHorizontal: 10, borderRadius: 8, paddingVertical: 4, marginVertical: 5 }}>
            <Text style={{ textAlign: "center", fontSize: 15, color: "white", fontWeight: "500" }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AddtoCart

const styles = StyleSheet.create({})