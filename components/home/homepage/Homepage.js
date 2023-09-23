import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert, Image } from "react-native";
import Card from "../../common/card/Card";
import styles from "./homepage.style";
import * as ImagePicker from "expo-image-picker";

const Homepage = ({ products }) => {
  const [currentProducts, setCurrentProducts] = useState(products);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    size: "",
    type: "",
    description: "",
    images: [],
  });
  const [isEditing, setIsEditing] = useState(false);

  const generateUniqueKey = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleAdd = () => {
    setIsAddingProduct(true);
  };

  const handleCancel = () => {
    // Clear the form and exit adding mode
    setNewProduct({
      name: "",
      price: "",
      size: "",
      type: "",
      description: "",
      images: [],
    });
    setIsAddingProduct(false);
  };

  const isProductValid = () => {
    // Validate the product fields here
    const priceAsNumber = parseFloat(newProduct.price); // Try to convert price to a number
    if (isNaN(priceAsNumber) || priceAsNumber <= 0) {
      return false; // Invalid price (not a number or <= 0)
    }
    return true; // Valid price
  };

  const handleSaveProduct = () => {
    if (!isProductValid()) {
      Alert.alert("Invalid Product", "Please enter valid product details.");
      return;
    }

    // Validate the new product data here
    // For simplicity, let's assume it's valid
    const updatedProducts = [
      ...currentProducts,
      { ...newProduct, id: generateUniqueKey() },
    ];
    setCurrentProducts(updatedProducts);

    // Clear the form and exit adding mode
    setNewProduct({
      name: "",
      price: "",
      size: "",
      type: "",
      description: "",
      images: [],
    });
    setIsAddingProduct(false);
  };

  const handleSelectImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission Denied",
        "You need to enable permissions to access the library."
      );
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    try {
      const imageUri = pickerResult.assets[0].uri;
      setNewProduct({ ...newProduct, images: [...newProduct.images, imageUri] });
    } catch (error) {
      console.error("Error loading image:", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleProductChange = (field, value) => {
    setNewProduct({ ...newProduct, [field]: value });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {currentProducts.map((item) => (
          <View style={styles.cardContainer} key={item.id}>
            <Card
              product={item}
              isEditing={isEditing}
              handleProductChange={handleProductChange}
              handleSaveProduct={handleSaveProduct}
              handleSelectImage={handleSelectImage}
            />
          </View>
        ))}
        {isAddingProduct ? (
          <View style={styles.cardContainer}>
            {isEditing ? (
              <TextInput
                placeholder="Name"
                value={newProduct.name}
                onChangeText={(text) =>
                  handleProductChange("name", text)
                }
                style={styles.input}
              />
            ) : (
              <Text style={styles.name}>{newProduct.name}</Text>
            )}

            {/* Price field */}
            {isEditing ? (
              <TextInput
                placeholder="Price"
                value={newProduct.price}
                onChangeText={(text) =>
                  handleProductChange("price", text)
                }
                style={styles.input}
                keyboardType="numeric"
              />
            ) : (
              <Text style={styles.price}>${newProduct.price}</Text>
            )}

            {/* Size field */}
            {isEditing ? (
              <TextInput
                placeholder="Size (M, L, S, SS)"
                value={newProduct.size}
                onChangeText={(text) =>
                  handleProductChange("size", text)
                }
                style={styles.input}
              />
            ) : (
              <Text style={styles.size}>{newProduct.size}</Text>
            )}

            {/* Type field */}
            {isEditing ? (
              <TextInput
                placeholder="Type (shoes, shirts, tshirts, pants)"
                value={newProduct.type}
                onChangeText={(text) =>
                  handleProductChange("type", text)
                }
                style={styles.input}
              />
            ) : (
              <Text style={styles.type}>{newProduct.type}</Text>
            )}

            {/* Description field */}
            {isEditing ? (
              <TextInput
                placeholder="Description"
                value={newProduct.description}
                onChangeText={(text) =>
                  handleProductChange("description", text)
                }
                style={styles.input}
              />
            ) : (
              <Text style={styles.description}>
                {newProduct.description}
              </Text>
            )}

            {/* Image selection */}
            {isEditing ? (
              <TouchableOpacity
                onPress={handleSelectImage}
                style={styles.SelectImgButton}
              >
                <Text style={styles.SelectImgButtonText}>Select Image</Text>
              </TouchableOpacity>
            ) : (
              <Image
                source={{ uri: newProduct.images[0] }}
                style={{ width: 100, height: 100 }}
                onError={() => console.log("Error loading image")}
              />
            )}

            {/* Edit/Save button */}
            {isEditing ? (
              <TouchableOpacity
                onPress={handleSaveProduct}
                style={styles.saveButton}
                disabled={!isProductValid()}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={handleEdit}
                style={styles.addProductButton}
              >
                <Text style={styles.addProductText}>Edit</Text>
              </TouchableOpacity>
            )}

            <View style={styles.cancel}>
              <TouchableOpacity
                onPress={handleCancel}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.cardContainer}>
            <TouchableOpacity
              onPress={handleAdd}
              style={styles.addProductButton}
            >
              <Text style={styles.addProductText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Homepage;
