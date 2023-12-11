import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const Search = () => {
    return (
        <View style={{}}>
            <Header />
            <View style={styles.SearchView}>
                <Image source={require('../assets/img/Bayer.png')} style={styles.InputleftArrow} />
                <TextInput placeholder='Search ' style={styles.Input} />
                <Image source={require('../assets/img/mic.png')} style={styles.InputleftArrow} />
            </View>
            <View style={{ marginHorizontal: 30, marginTop: "15%" }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Popular Searches</Text>
                <View style={styles.PopularSearchView}>
                    {
                        data.map((item, index) => (
                            <View style={styles.PopularSearchMainV}>
                                <Text style={styles.PopularSearchTxt}>{item}</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
            <View style={{ marginHorizontal: 30, marginTop: "15%" }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>History</Text>
                <View style={styles.PopularSearchView}>
                    {
                        data.map((item, index) => (
                            <View style={styles.PopularSearchMainV}>
                                <Text style={styles.PopularSearchTxt}>{item}</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    InputleftArrow: {
        borderWidth: 1,
        width: 25,
        height: 25
    },
    SearchView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        marginHorizontal: 25,
        borderRadius: 15,
        marginTop: 30
    },
    Input: {
        width: "70%",
        paddingVertical: 10,
        marginLeft: 10
    },
    PopularSearchView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
    },
    PopularSearchMainV: {
        width: "35%",
        borderWidth: 0.5,
        paddingVertical: 10,
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 8,
        borderColor: "rgba(0, 0, 0, 0.1)"
    }
})

const data = ["Mahyco", "Mahyco", "Mahyco", "Mahyco"]