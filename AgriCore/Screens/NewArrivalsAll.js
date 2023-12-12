import Header from "../Components/Header";
import { Text, StyleSheet, View , ScrollView, Image} from 'react-native'
import BreadCrumb from "../Components/BreadCrumb";
import SearchBar from "../Components/SearchBar"; 
import NewArrivalPage from "../Components/NewArrivalsPage";

const NewArrivalsAll = () => {
  return (
    <ScrollView style={styles.container}>
    <SearchBar placeholder={"Pesticides, herbicides"}/>
     <NewArrivalPage/>
    </ScrollView>
  )
}

export default NewArrivalsAll

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop:"5%"
    },
})