import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";

const MySvg = () => {
  const svgMarkup = `
    <svg width="79" height="54" viewBox="0 0 79 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path d="M5.1 32.3C3.76 32.3 2.67 31.88 1.83 31.04C1.01 30.18 0.6 29.04 0.6 27.62C0.6 26.2 1 25.08 1.8 24.26C2.62 23.42 3.69 23 5.01 23C5.95 23 6.77 23.33 7.47 23.99C7.55 23.75 7.7 23.55 7.92 23.39C8.14 23.23 8.4 23.15 8.7 23.15C9.1 23.15 9.42 23.27 9.66 23.51C9.92 23.73 10.05 24 10.05 24.32V31.13C10.05 31.47 9.92 31.75 9.66 31.97C9.42 32.19 9.1 32.3 8.7 32.3C8.04 32.3 7.63 32.01 7.47 31.43C6.83 32.01 6.04 32.3 5.1 32.3ZM5.31 29.87C5.95 29.87 6.46 29.66 6.84 29.24C7.22 28.8 7.41 28.26 7.41 27.62C7.41 26.96 7.22 26.43 6.84 26.03C6.46 25.63 5.95 25.43 5.31 25.43C4.69 25.43 4.18 25.63 3.78 26.03C3.4 26.43 3.21 26.96 3.21 27.62C3.21 28.26 3.4 28.8 3.78 29.24C4.18 29.66 4.69 29.87 5.31 29.87ZM16.6835 36.35C16.1235 36.35 15.5835 36.29 15.0635 36.17C14.5435 36.07 14.0735 35.91 13.6535 35.69C13.1735 35.43 12.9335 35.03 12.9335 34.49C12.9335 34.15 13.0535 33.85 13.2935 33.59C13.5335 33.35 13.8135 33.23 14.1335 33.23C14.3935 33.23 14.6235 33.29 14.8235 33.41C15.1435 33.59 15.4735 33.72 15.8135 33.8C16.1735 33.88 16.5235 33.92 16.8635 33.92C17.6235 33.92 18.1835 33.75 18.5435 33.41C18.9235 33.07 19.1135 32.62 19.1135 32.06V31.37C18.4735 31.99 17.6835 32.3 16.7435 32.3C15.4035 32.3 14.3235 31.88 13.5035 31.04C12.7035 30.18 12.3035 29.04 12.3035 27.62C12.3035 26.2 12.6935 25.08 13.4735 24.26C14.2735 23.42 15.3335 23 16.6535 23C17.6135 23 18.4435 23.37 19.1435 24.11C19.2035 23.83 19.3435 23.6 19.5635 23.42C19.8035 23.24 20.0935 23.15 20.4335 23.15C20.8335 23.15 21.1535 23.27 21.3935 23.51C21.6335 23.75 21.7535 24.05 21.7535 24.41V32.12C21.7535 33.4 21.3035 34.42 20.4035 35.18C19.5235 35.96 18.2835 36.35 16.6835 36.35ZM16.9535 29.87C17.5535 29.87 18.0335 29.66 18.3935 29.24C18.7735 28.8 18.9635 28.26 18.9635 27.62C18.9635 26.96 18.7735 26.43 18.3935 26.03C18.0335 25.63 17.5535 25.43 16.9535 25.43C16.3335 25.43 15.8335 25.63 15.4535 26.03C15.0935 26.43 14.9135 26.96 14.9135 27.62C14.9135 28.26 15.0935 28.8 15.4535 29.24C15.8335 29.66 16.3335 29.87 16.9535 29.87ZM25.8105 32.21C25.4305 32.21 25.1105 32.1 24.8505 31.88C24.5905 31.66 24.4605 31.38 24.4605 31.04V24.32C24.4605 24 24.5805 23.73 24.8205 23.51C25.0805 23.27 25.4105 23.15 25.8105 23.15C26.1705 23.15 26.4605 23.26 26.6805 23.48C26.9205 23.68 27.0605 23.93 27.1005 24.23C27.3205 23.89 27.6205 23.6 28.0005 23.36C28.3805 23.12 28.7805 23 29.2005 23C29.4605 23 29.7105 23.03 29.9505 23.09C30.2305 23.17 30.4605 23.33 30.6405 23.57C30.8205 23.79 30.9105 24.05 30.9105 24.35C30.9105 24.77 30.7705 25.12 30.4905 25.4C30.2305 25.66 29.9205 25.75 29.5605 25.67C29.3005 25.61 29.0405 25.58 28.7805 25.58C28.3205 25.58 27.9405 25.74 27.6405 26.06C27.3405 26.38 27.1605 27.03 27.1005 28.01V31.01C27.1005 31.35 26.9705 31.64 26.7105 31.88C26.4705 32.1 26.1705 32.21 25.8105 32.21ZM43.6907 32.3C42.8507 32.3 42.0607 32.11 41.3207 31.73C40.6007 31.35 40.0207 30.8 39.5807 30.08C39.1407 29.36 38.9207 28.5 38.9207 27.5C38.9407 26.12 39.3907 25.03 40.2707 24.23C41.1507 23.41 42.2907 23 43.6907 23C44.2307 23 44.7607 23.06 45.2807 23.18C45.8007 23.3 46.2507 23.52 46.6307 23.84C46.9307 24.08 47.0807 24.39 47.0807 24.77C47.0807 25.09 46.9607 25.38 46.7207 25.64C46.5007 25.9 46.2207 26.03 45.8807 26.03C45.6607 26.03 45.4607 25.97 45.2807 25.85C44.9807 25.69 44.7107 25.58 44.4707 25.52C44.2507 25.46 44.0007 25.43 43.7207 25.43C43.0607 25.43 42.5207 25.62 42.1007 26C41.6807 26.38 41.4707 26.89 41.4707 27.53C41.4707 28.27 41.7007 28.85 42.1607 29.27C42.6207 29.67 43.1607 29.87 43.7807 29.87C44.4807 29.87 45.1407 29.61 45.7607 29.09C46.0007 28.91 46.2307 28.82 46.4507 28.82C46.7707 28.82 47.0407 28.95 47.2607 29.21C47.5007 29.47 47.6207 29.77 47.6207 30.11C47.6207 30.25 47.5907 30.41 47.5307 30.59C47.4707 30.75 47.3607 30.91 47.2007 31.07C46.6607 31.51 46.0807 31.82 45.4607 32C44.8607 32.2 44.2707 32.3 43.6907 32.3ZM54.0166 32.3C53.1566 32.3 52.3666 32.1 51.6466 31.7C50.9266 31.3 50.3466 30.75 49.9066 30.05C49.4866 29.33 49.2766 28.52 49.2766 27.62C49.2766 26.7 49.4866 25.9 49.9066 25.22C50.3466 24.52 50.9266 23.98 51.6466 23.6C52.3666 23.2 53.1566 23 54.0166 23C54.8966 23 55.6866 23.2 56.3866 23.6C57.1066 23.98 57.6766 24.52 58.0966 25.22C58.5166 25.9 58.7266 26.7 58.7266 27.62C58.7266 28.52 58.5166 29.33 58.0966 30.05C57.6766 30.75 57.1066 31.3 56.3866 31.7C55.6866 32.1 54.8966 32.3 54.0166 32.3ZM54.0166 29.87C54.6366 29.87 55.1366 29.66 55.5166 29.24C55.9166 28.8 56.1166 28.26 56.1166 27.62C56.1166 26.96 55.9166 26.43 55.5166 26.03C55.1366 25.63 54.6366 25.43 54.0166 25.43C53.4166 25.43 52.9066 25.63 52.4866 26.03C52.0866 26.43 51.8866 26.96 51.8866 27.62C51.8866 28.26 52.0866 28.8 52.4866 29.24C52.9066 29.66 53.4166 29.87 54.0166 29.87ZM62.4907 32.21C62.1107 32.21 61.7907 32.1 61.5307 31.88C61.2707 31.66 61.1407 31.38 61.1407 31.04V24.32C61.1407 24 61.2607 23.73 61.5007 23.51C61.7607 23.27 62.0907 23.15 62.4907 23.15C62.8507 23.15 63.1407 23.26 63.3607 23.48C63.6007 23.68 63.7407 23.93 63.7807 24.23C64.0007 23.89 64.3007 23.6 64.6807 23.36C65.0607 23.12 65.4607 23 65.8807 23C66.1407 23 66.3907 23.03 66.6307 23.09C66.9107 23.17 67.1407 23.33 67.3207 23.57C67.5007 23.79 67.5907 24.05 67.5907 24.35C67.5907 24.77 67.4507 25.12 67.1707 25.4C66.9107 25.66 66.6007 25.75 66.2407 25.67C65.9807 25.61 65.7207 25.58 65.4607 25.58C65.0007 25.58 64.6207 25.74 64.3207 26.06C64.0207 26.38 63.8407 27.03 63.7807 28.01V31.01C63.7807 31.35 63.6507 31.64 63.3907 31.88C63.1507 32.1 62.8507 32.21 62.4907 32.21ZM73.4707 32.3C72.1107 32.3 70.9607 31.9 70.0207 31.1C69.1007 30.28 68.6407 29.16 68.6407 27.74C68.6407 26.26 69.0907 25.1 69.9907 24.26C70.9107 23.42 72.0607 23 73.4407 23C74.4207 23 75.2307 23.18 75.8707 23.54C76.5107 23.9 76.9907 24.36 77.3107 24.92C77.6307 25.48 77.7907 26.07 77.7907 26.69C77.7907 27.73 77.3307 28.25 76.4107 28.25H71.4307C71.2707 28.25 71.1907 28.35 71.1907 28.55C71.1907 29.01 71.4407 29.38 71.9407 29.66C72.4607 29.92 73.0407 30.05 73.6807 30.05C74.0807 30.05 74.4807 30 74.8807 29.9C75.2807 29.78 75.6307 29.61 75.9307 29.39C76.1307 29.25 76.3407 29.18 76.5607 29.18C76.8607 29.18 77.1107 29.29 77.3107 29.51C77.5307 29.73 77.6407 29.99 77.6407 30.29C77.6407 30.65 77.4507 30.99 77.0707 31.31C76.7107 31.61 76.1807 31.85 75.4807 32.03C74.8007 32.21 74.1307 32.3 73.4707 32.3ZM75.0307 26.51C75.0707 26.51 75.1207 26.5 75.1807 26.48C75.2607 26.46 75.3007 26.39 75.3007 26.27C75.3007 25.97 75.1107 25.7 74.7307 25.46C74.3707 25.2 73.9007 25.07 73.3207 25.07C72.7007 25.07 72.1907 25.21 71.7907 25.49C71.4107 25.75 71.2207 26.02 71.2207 26.3C71.2207 26.44 71.3007 26.51 71.4607 26.51H75.0307Z" fill="white"/>
<mask id="mask0_331_6138" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="32" y="0" width="23" height="19">
<rect x="32" width="23" height="18.6788" fill="url(#pattern0)"/>
</mask>
<g mask="url(#mask0_331_6138)">
<rect x="32" y="-1.67285" width="22.0242" height="22.0242" fill="white"/>
</g>
<path d="M35 24L35 31" stroke="white" stroke-width="3" stroke-linecap="round"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_331_6138" transform="matrix(0.00158617 0 0 0.00195312 0.0939394 0)"/>
</pattern>
<image id="image0_331_6138" width="512" height="512" xlink:href="data:image/png;base64,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"/>
</defs>
</svg> `;

  return (
    <View style={{ left: 45 }}>
      <SvgXml xml={svgMarkup} width="79" height="54" />
    </View>
  );
};
const Header = ({ onPress }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarWidth = 284;

  const animatedValue = useRef(new Animated.Value(-sidebarWidth)).current;

  const openSidebar = () => {
    setIsSidebarOpen(true);
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(animatedValue, {
      toValue: -sidebarWidth,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsSidebarOpen(false);
    });
  };

  useEffect(() => {
    if (!isSidebarOpen) {
      animatedValue.setValue(-sidebarWidth);
    }
  }, [isSidebarOpen, animatedValue, sidebarWidth]);

  return (
    <>
      <StatusBar
        backgroundColor={isSidebarOpen ? "#151716" : "#266937"}
        barStyle="light-content"
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={openSidebar}>
          <Image
            source={require("../assets/icons/sideBar.png")}
            style={styles.sidebarIcon}
          />
        </TouchableOpacity>
        <MySvg />
        <View style={styles.iconsContainer}>
          <Image
            source={require("../assets/icons/searchIcon.png")}
            style={styles.headerIcon}
          />
          <Icon name="bell" type="font-awesome" color="white" />
          <FontAwesome5 name="shopping-cart" size={24} color="white" onPress={onPress} />
        </View>
      </View>

      {isSidebarOpen && (
        <Animated.View
          style={[styles.sidebar, { left: animatedValue, width: sidebarWidth }]}
        >
          <TouchableOpacity onPress={closeSidebar}>
            <Image
              source={require("../assets/icons/closeIcon.png")}
              style={styles.closeIcon}
            />
            <View style={{ marginTop: "20%" }}>
              <TouchableOpacity style={{ flexDirection: "row", marginTop: "6%", marginBottom: "5%", marginLeft: "5%", width: "80%" }}>
                <Icon name="play-circle" type="font-awesome" color="white" size={27} />
                <Text style={styles.opt}>How Agricore app works?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "row", marginTop: "6%", marginBottom: "5%", marginLeft: "5%", width: "80%" }}>
                <Icon name="phone-in-talk" type="materialIcons" color="white" size={27} />
                <Text style={styles.opt}>Book an apointment with expert</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: "row", marginTop: "6%", marginBottom: "5%", marginLeft: "5%", width: "80%" }}>
                <Icon name="wechat" type="font-awesome" color="white" size={27} />
                <Text style={styles.opt}>Chat to solve problem</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: "row", marginTop: "6%", marginBottom: "5%", marginLeft: "5%", width: "80%" }}>
                <Icon name="thumbs-up-down" type="MaterialCommunityIcons" color="white" size={27} />
                <Text style={styles.opt}>Rate Agricore app</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: "row", marginTop: "6%", marginBottom: "5%", marginLeft: "5%", width: "80%" }}>
                <Icon name="language" type="font-awesome" color="white" size={27} />
                <Text style={styles.opt}>Change Language</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: "row", marginTop: "6%", marginBottom: "5%", marginLeft: "5%", width: "80%" }}>
                <Icon name="person-add" type="ionicons" color="white" size={27} />
                <Text style={styles.opt}>Invite friends</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: "row", marginTop: "6%", marginBottom: "5%", marginLeft: "5%", width: "80%" }}>
                <Icon name="share-alt" type="font-awesome" color="white" size={27} />
                <Text style={styles.opt}>Share Agricore app</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "row", marginTop: "6%", marginBottom: "5%", marginLeft: "5%", width: "80%" }}>
                <Icon name="lightbulb" type="foundation" color="white" size={27} />
                <Text style={styles.opt}>Suggestion</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: "row", marginTop: "6%", marginBottom: "5%", marginLeft: "5%", width: "80%" }}>
                <Icon name="logout" type="MaterialCommunityIcons" color="white" size={27} />
                <Text style={styles.opt}>Logout</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    width: "100%",
    backgroundColor: "#266937",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: Platform.OS === "ios" ? 40 : 16,
    zIndex: 1,
  },
  sidebarIcon: {
    width: 22.5,
    height: 21,
  },
  iconsContainer: {
    flexDirection: "row",
    marginLeft: "auto",
    marginTop: 16,
    justifyContent: "space-around",
    width: "37%",
  },
  headerIcon: {
    width: 34,
    height: 34,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    height: "100%",
    backgroundColor: "#151716",
    zIndex: 5,
  },
  closeIcon: {
    width: 20,
    height: 20,
    margin: 10,
  },
  opt: {
    color: "#FFFFFF",
    fontSize: 17,
    paddingLeft: "7%"
  },
});

export default Header;
