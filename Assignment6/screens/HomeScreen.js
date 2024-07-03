import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import ProductItem from "../components/ProductItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const PRODUCTS = [
  { id: "1", description: '', name: "Office Wear", price: 120, image: require('../assets/dress1.png') },
  { id: "2", description: '', name: "Black", price: 120, image: require('../assets/dress2.png') },
  { id: "3", description: '', name: "Church Wear", price: 120, image: require('../assets/dress3.png') },
  { id: "4", description: '', name: "Lamerei", price: 120, image: require('../assets/dress4.png') },
  { id: "5", description: '', name: "Lamerei", price: 120, image: require('../assets/dress5.png') },
  { id: "6", description: '', name: "Lamerei", price: 120, image: require('../assets/dress6.png') },
  { id: "8", description: '', name: "Lamerei", price: 120, image: require('../assets/dress7.png') },
];

const HomeScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    };
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists) {
      return; // If item already exists in cart, do not add again
    }

    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("../assets/Menu.png")} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Open Fashion</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Image source={require("../assets/Search.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Text style={{textAlign:'right'}}>{cartItems.length}</Text>
          <Image
            source={require("../assets/shoppingBag.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerr}>
        <Text style={styles.titlee}>OUR STORY</Text>
        <View style={styles.iconContainer}>
          <View style={styles.line} />
          <View style={styles.iconCircle} >
            <Ionicons name="book" size={30}/>
          </View>
          <View style={styles.iconCircle} >
            <Ionicons name="filter" size={30}/>
          </View>
        </View>
      </View>
      <FlatList
        data={PRODUCTS}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductItem product={item} onAddToCart={addToCart} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  containerr: {
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  icon: {
    width: 24,
    height: 24,
  },
  titlee: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 4,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#eeede9',
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productList: {
    padding: 6,
    gap: 6,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default HomeScreen;
