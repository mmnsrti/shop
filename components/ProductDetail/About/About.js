import React from "react";
import { View, Text, ScrollView, SafeAreaView, Image, FlatList } from "react-native";
import styles from "./About.style";

const About = ({ description, images }) => {
  const renderItem = ({ item }) => {
    return (
      <Image
        source={{ uri: item }}
        style={styles.image}
        onError={(error) => console.error(`Error loading image: ${error.nativeEvent.error}`)}
      />
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* Product Description */}
          <Text style={styles.descriptionTitle}>Description:</Text>
          {/* Divider line */}
          <View style={styles.divider} />
          <Text style={styles.description}>{description}</Text>


          {/* Product Images */}
          <FlatList
            data={images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem} // Use the modified renderItem function
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
