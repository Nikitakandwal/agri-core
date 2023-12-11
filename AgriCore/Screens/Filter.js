import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const Filter = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <Header />
            <View style={styles.CategoryView}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Category</Text>
                <Text style={{ fontSize: 12, fontWeight: "500" }}>View all</Text>
            </View>
            <View style={styles.CategoryView}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Brands</Text>
                <Text style={{ fontSize: 12, fontWeight: "500" }}>View all</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }}>
                {
                    category.map((item, index) => (
                        <View style={{
                            borderWidth: 1, width: "35%", marginVertical: 15, alignItems: "center", paddingVertical: 10, borderRadius: 8, borderColor: "rgba(0, 0, 0, 0.1)"
                        }}>
                            <Text>{item}</Text>
                        </View>
                    ))
                }
            </View>
            <View style={styles.CategoryView}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Price Range</Text>
                <Text style={{ fontSize: 12, fontWeight: "500" }}>500-600</Text>
            </View>

            <View style={styles.CategoryView}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Discount Range</Text>
                <Text style={{ fontSize: 12, fontWeight: "500" }}>All</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }}>
                {
                    category.map((item, index) => (
                        <View style={{
                            borderWidth: 1, width: "35%", marginVertical: 15, alignItems: "center", paddingVertical: 10, borderRadius: 8, borderColor: "rgba(0, 0, 0, 0.1)"
                        }}>
                            <Text>{item}</Text>
                        </View>
                    ))
                }
            </View>

            <View style={styles.CategoryView}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Delivery Type</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }}>
                {
                    category.map((item, index) => (
                        <View style={{
                            borderWidth: 1, width: "35%", marginVertical: 15, alignItems: "center", paddingVertical: 10, borderRadius: 8, borderColor: "rgba(0, 0, 0, 0.1)"
                        }}>
                            <Text>{item}</Text>
                        </View>
                    ))
                }
            </View>

        </ScrollView>
    )
}

export default Filter

const styles = StyleSheet.create({
    CategoryView: {
        // borderWidth: 1,
        marginHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20
    }
}
)

const category = ["Test1", "Test1", "Test1", "Test1"]