import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <View style={styles.productContainer}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(product)}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
  addButton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#000",
    borderRadius: 4,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default ProductItem;