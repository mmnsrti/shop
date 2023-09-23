// Hero.js

import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import styles from "./Hero.style";
import { Picker } from "@react-native-picker/picker";

const Hero = ({ name, price, size, description }) => {
  // Create a state variable to hold the selected size
  const [selectedSize, setSelectedSize] = useState(size);

  // Define an array of available sizes (you can customize this)
  const availableSizes = ["S", "M", "L", "XL"];

  // Function to handle size selection
  const handleSizeChange = (itemValue) => {
    setSelectedSize(itemValue);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.name}>{name}</Text>
          
          {/* Description */}
          <Text style={styles.description}>{description}</Text>
          
          {/* Size Dropdown */}
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeLabel}>Size:</Text>
            <Picker
              selectedValue={selectedSize}
              onValueChange={handleSizeChange}
              style={styles.sizePicker} // Apply the custom styles here
            >
              {availableSizes.map((sizeOption) => (
                <Picker.Item
                  key={sizeOption}
                  label={sizeOption}
                  value={sizeOption}
                />
              ))}
            </Picker>
          </View>
          
          <Text style={styles.price}>Price: ${price}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Hero;
