import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./AddToCart.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const AddToCart = ({ type }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    console.log(`Added ${type} to cart`);
  };

  // Function to handle decrementing the cart count
  const handleDecrement = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Type */}
      <Text style={styles.typeText}>Type: {type}</Text>

      <View style={styles.cartContent}>
        {/* Decrement Button */}
        {cartCount > 0 && (
          <TouchableOpacity onPress={handleDecrement} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        )}

        {/* Add to Cart Button */}
        <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
          <Text style={styles.buttonText}>
            <FontAwesome5 name="shopping-cart" size={20} color="black" />
            {cartCount === 0 ? "Add to Cart" : "+"}
          </Text>
        </TouchableOpacity>

        {/* Display the cart count */}
        <Text style={styles.cartCount}>{cartCount}</Text>
      </View>

      {/* Heart Icon and Add to Wishlist Text in one line */}
      <View style={styles.wishlistContent}>
        <TouchableOpacity onPress={() => console.log("Added to Wishlist")}>
          <View style={styles.addToWishlist}>
            <AntDesign name="hearto" size={20} color="#a8a53e" />
            <Text style={styles.addToWishlistText}>Add to Wishlist</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddToCart;
