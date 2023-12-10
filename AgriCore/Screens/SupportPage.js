import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import { Dimensions } from "react-native";
import Faqs from "../Components/Faqs";

const windowWidth = Dimensions.get("window").width;

const Price2 = ({ originalPrice, discountedPrice }) => {
  return (
    <View style={styles.pContainer}>
      <View style={styles.discountedPriceContainer}>
        <Text style={styles.discountedPrice}>{`₹${discountedPrice}`}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>{`₹${originalPrice}`}</Text>
        </View>
      </View>
    </View>
  );
};

const data = () => [
  {
    id: 1,
    title: "Glycel Herbicide",
    label: "Sumito",
    size: "1 Ltr",
    qty: 2,
    text: "Arriving by Thursday",
    price: "1320",
  },
  {
    id: 2,
    title: "Glycel Herbicide",
    label: "Sumito",
    size: "1 Ltr",
    qty: 2,
    text: "Arriving by Thursday",
    price: "1320",
  },
];

const recentCard = (item) => {
  return (
    <View
      key={item.id}
      style={{
        height: 130,
        width: windowWidth * 0.9,
        backgroundColor: "#F5F5F5",
        borderWidth: 1,
        borderColor: "#00000010",
        borderRadius: 8,
        flexDirection: "row",
        marginVertical: "2%",
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View
        style={{
          width: windowWidth * 0.32,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/img/Glycel.png")} />
      </View>
      <View style={{ marginVertical: "4%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#333333", fontWeight: "500" }}>
            {item.title}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#41B5A0",
              width: 62,
              height: 14,
              borderRadius: 2,
              marginHorizontal: "16%",
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 10, textAlign: "center" }}
            >
              Track
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: windowWidth * 0.5,
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#33333370" }}>{item.label}</Text>
              <Text style={{ color: "#33333370", marginHorizontal: "9%" }}>
                {item.size}
              </Text>
            </View>
            <Text style={{ color: "#33333370", fontSize: 10 }}>
              Qty:{item.qty}
            </Text>
            <Text style={{ color: "#33333370", fontSize: 10 }}>
              {item.text}
            </Text>
          </View>
          <View>
            <Price2 originalPrice={1630} discountedPrice={1320} />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginVertical: "4%" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#425343",
              width: windowWidth * 0.2,
              marginRight: "5%",
              height: 20,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 10 }}>Get help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#425343",
              width: windowWidth * 0.3,
              height: 20,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 10 }}>View details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const SupportPage = () => {
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <Header />
      <View style={{ marginHorizontal: "5%", marginVertical: "4%" }}>
        <Text style={{ fontWeight: "800", fontSize: 16 }}>Need Help?</Text>
        <Text style={{ color: "#33333360", marginVertical: "3%" }}>
          We have covered it all for you.
        </Text>
        <SearchBar placeholder={"Blogs, topics"} />
      </View>
      <View style={{ marginHorizontal: "5%", marginVertical: "4%" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 17, fontWeight: "700" }}>Recent orders</Text>
          <Text>View all</Text>
        </View>
        {data().map((item) => (
          <View key={item.id}>{recentCard(item)}</View>
        ))}
      </View>

      <View style={{ marginHorizontal: "5%", marginVertical: "4%" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 17, fontWeight: "700" }}>Tickets</Text>
          <Text>View all</Text>
        </View>
        <TouchableOpacity
          style={{
            marginVertical: "2%",
            backgroundColor: "#D9D9D920",
            borderRadius: 10,
            width: windowWidth * 0.9,
            height: 71,
            borderColor: "#00000010",
            borderWidth: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: windowWidth * 0.2,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: "5%",
            }}
          >
            <Image source={require("../assets/img/order-processed.png")} />
          </View>
          <View style={{ marginVertical: "2%" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "700" }}>#113325 - </Text>
              <Text style={{ color: "#B71D1D" }}>open</Text>
              <View
                style={{
                  backgroundColor: "#B71D1D",
                  height: 7,
                  width: 7,
                  borderRadius: 50,
                  margin: "5%",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 12, color: "#333333" }}>
              Glycel Herbicide not delivered
            </Text>
          </View>
          <View
            style={{
              width: windowWidth * 0.2,
              marginLeft: "20%",
              marginVertical: "4%",
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 20 }}>&gt;</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: "2%",
            backgroundColor: "#D9D9D920",
            borderRadius: 10,
            width: windowWidth * 0.9,
            height: 71,
            borderColor: "#00000010",
            borderWidth: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: windowWidth * 0.2,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: "5%",
            }}
          >
            <Image source={require("../assets/img/order-processed.png")} />
          </View>
          <View style={{ marginVertical: "2%" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "700" }}>#113325 - </Text>
              <Text style={{ color: "#B71D1D" }}>open</Text>
              <View
                style={{
                  backgroundColor: "#B71D1D",
                  height: 7,
                  width: 7,
                  borderRadius: 50,
                  margin: "5%",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 12, color: "#333333" }}>
              Glycel Herbicide not delivered
            </Text>
          </View>
          <View
            style={{
              width: windowWidth * 0.2,
              marginLeft: "20%",
              marginVertical: "4%",
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 20 }}>&gt;</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: "2%",
            backgroundColor: "#D9D9D920",
            borderRadius: 10,
            width: windowWidth * 0.9,
            height: 71,
            borderColor: "#00000010",
            borderWidth: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: windowWidth * 0.2,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: "5%",
            }}
          >
            <Image source={require("../assets/img/userSmall.png")} />
          </View>
          <View style={{ marginVertical: "2%" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "700" }}>#113325 - </Text>
              <Text style={{ color: "#99B17D" }}>closed</Text>
              <View
                style={{
                  backgroundColor: "#99B17D",
                  height: 7,
                  width: 7,
                  borderRadius: 50,
                  margin: "5%",
                }}
              ></View>
            </View>
            <Text style={{ fontSize: 12, color: "#333333" }}>
              Glycel Herbicide not delivered
            </Text>
          </View>
          <View
            style={{
              width: windowWidth * 0.2,
              marginLeft: "20%",
              marginVertical: "4%",
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 20 }}>&gt;</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: "6%" }}>
        <Text style={{ fontSize: 17, fontWeight: "700" }}>Help</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              margin: "3%",
              height: 106,
              width: 153,
              backgroundColor: "#F5F5F5",
              borderColor: "#00000010",
              borderWidth: 1,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Image source={require("../assets/img/userBig.png")} />
            <Text
              style={{
                fontSize: 16,
                color: "#333333",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: "3%",
              height: 106,
              width: 153,
              backgroundColor: "#F5F5F5",
              borderColor: "#00000010",
              borderWidth: 1,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Image source={require("../assets/img/moneyy.png")} />
            <Text
              style={{
                fontSize: 16,
                color: "#333333",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Payments
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              margin: "3%",
              height: 106,
              width: 153,
              backgroundColor: "#F5F5F5",
              borderColor: "#00000010",
              borderWidth: 1,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Image source={require("../assets/img/bid.png")} />
            <Text
              style={{
                fontSize: 16,
                color: "#333333",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Bidding
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: "3%",
              height: 106,
              width: 153,
              backgroundColor: "#F5F5F5",
              borderColor: "#00000010",
              borderWidth: 1,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Image source={require("../assets/img/planting1.png")} />
            <Text
              style={{
                fontSize: 16,
                color: "#333333",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Order profiles
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginVertical:"4%", marginHorizontal:"3%"}}>
      <Faqs/>
      </View>
    </ScrollView>
  );
};

export default SupportPage;

const styles = StyleSheet.create({
  pContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomColor: "#ccc",
    marginLeft: 0,
    marginTop: 3,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  originalPrice: {
    textDecorationLine: "line-through",
    color: "rgba(51, 51, 51, 0.8)", // #333333 with 80% opacity
    fontSize: 12,
    marginLeft: 5,
  },
  discountedPrice: {
    fontWeight: "bold",
    color: "rgba(51, 51, 51, 1)", // #333333 with 100% opacity
    fontSize: 16,
  },
});
