// Card.js
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import styles from "./card.style";
import { useRouter } from "expo-router";

const Card = ({ product, onEditPress }) => {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    // Save the edited product details and exit edit mode
    setIsEditing(false);
    // You can pass the edited product data to a parent component here
    // For example: onEditSave(editedProduct);
  };

  const handleNavigate=()=>{
    router.push(`/ProductDetail/${product?.id}`);
  }
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.cardContainer}>
      <Image
        source={{ uri: editedProduct.images[0] }} 
        style={styles.image}
        defaultSource={{uri:'https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png'}}
      />
      {isEditing ? (
        <TextInput
          placeholder="Name"
          value={editedProduct.name}
          onChangeText={(text) => setEditedProduct({ ...editedProduct, name: text })}
          style={styles.input}
        />
      ) : (
        <Text style={styles.name}>{editedProduct.name}</Text>
      )}
      {isEditing ? (
        <TextInput
          placeholder="Price"
          value={editedProduct.price}
          onChangeText={(text) => setEditedProduct({ ...editedProduct, price: text })}
          style={styles.input}
          keyboardType="numeric"
        />
      ) : (
        <Text style={styles.price}>${editedProduct.price}</Text>
      )}
      {/* ... Other product fields ... */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.icon}>
          <FontAwesome5 name="shopping-cart" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={isEditing ? handleSave : handleEdit} style={styles.icon}>
          <AntDesign name={isEditing ? "checkcircle" : "edit"} size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.icon}>
          <AntDesign name="hearto" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigate} style={styles.icon}>
          <SimpleLineIcons name="size-fullscreen" size={20} color="black" />
        </TouchableOpacity>
        {isEditing && (
          <TouchableOpacity onPress={handleCancelEdit} style={styles.icon}>
            <AntDesign name="closecircle" size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
