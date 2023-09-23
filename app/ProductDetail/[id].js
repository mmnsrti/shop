import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import Hero from "../../components/ProductDetail/Hero/Hero";
import About from "../../components/ProductDetail/About/About";
import AddToCart from "../../components/ProductDetail/addToCart/AddToCart";
import MightLike from "../../components/ProductDetail/mightLike/MightLike";
import db from "../../utils/db.json"; // Import the JSON data
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ProductDetail = () => {
  const route = useRouter(); // Access the route object to get parameters
  const params = useGlobalSearchParams();

  // Extract the productId from the route parameters
  const { id } = params;

  // Find the product with the matching ID in the JSON data
  const productsMap = {};
  db.products.forEach((p) => {
    productsMap[p.id] = p;
  });

  const product = productsMap[id];
  if (!product) {
    return (
      <View>
        <Text>Product not found</Text>
      </View>
    );
  }

  // Find related products
  const getRelatedProducts = (productId) => {
    if (product && product.related_products) {
      return db.products.filter((p) => product.related_products.includes(p.id));
    }
    return [];
  };
  const relatedProducts = getRelatedProducts();

  // State for editing mode and edited product details
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle the "Edit" button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle the "Save" button click
  const handleSaveClick = () => {
    // Perform actions to save the edited product details (e.g., update API, state, etc.)
    // For this example, we'll update the state with the edited product details
    setEditedProduct({ ...editedProduct, images: [selectedImage] });
    setIsEditing(false); // Exit editing mode
  };

  // Function to handle the "Cancel" button click
  const handleCancelClick = () => {
    // Restore the original product details and clear the selected image
    setEditedProduct({ ...product });
    setSelectedImage(null);
    setIsEditing(false); // Exit editing mode
  };

  // Function to open the image picker
  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage(pickerResult.uri);
  };

  useEffect(() => {
    // Request permissions when the component mounts
    (async () => {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert("Permission to access media library is required!");
      }
    })();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Hero
            name={isEditing ? editedProduct.name : editedProduct.name}
            description={
              isEditing ? editedProduct.description : editedProduct.description
            }
            price={isEditing ? editedProduct.price : editedProduct.price}
            size={isEditing ? editedProduct.size : editedProduct.size}
          />
          <AddToCart
            type={isEditing ? editedProduct.type : editedProduct.type}
          />
          {/* "Edit" button */}
          <TouchableOpacity onPress={handleEditClick} style={styles.editButton}>
            <AntDesign
              name={isEditing ? "checkcircle" : "edit"}
              size={26}
              color="black"
            />
          </TouchableOpacity>

        

          {/* Use FlatList to render images */}
          <About
            description={
              isEditing ? editedProduct.description : editedProduct.description
            }
            images={isEditing ? editedProduct.images : editedProduct.images}
          />
          {/* Display related products in "Might Like" section */}
          <MightLike relatedProducts={relatedProducts} />

          {/* Modal for editing */}
          <Modal visible={isEditing} animationType="slide">
            <View style={styles.modalContent}>
              {/* Editable fields */}
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={editedProduct.name}
                onChangeText={(text) =>
                  setEditedProduct({ ...editedProduct, name: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Description"
                value={editedProduct.description}
                onChangeText={(text) =>
                  setEditedProduct({ ...editedProduct, description: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Price"
                value={editedProduct.price.toString()}
                onChangeText={(text) =>
                  setEditedProduct({
                    ...editedProduct,
                    price: parseFloat(text),
                  })
                }
                keyboardType="numeric"
              />
              <Button title="Select Image" onPress={openImagePicker} />
              <View style={styles.buttonContainer}>
                <Button
                  title="Save"
                  onPress={handleSaveClick}
                  style={styles.saveButton}
                />
                <Button
                  title="Cancel"
                  onPress={handleCancelClick}
                  style={styles.cancelButton}
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  editButton: {
    alignSelf: "flex-end",
    marginBottom: 16,
    marginRight: 60,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    flex: 1,
    marginRight: 8,
    backgroundColor: "green", // Customize the button background color
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#800522", // Customize the button background color
  },
  selectedImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 16,
  },
});

export default ProductDetail;
