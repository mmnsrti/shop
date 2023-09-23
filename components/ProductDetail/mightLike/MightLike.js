import React from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native"; // Import Platform
import Card from "../../common/card/Card";
import styles from "./MightLike.style";

const MightLike = ({ relatedProducts }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You might also like these</Text>
      <FlatList
        data={relatedProducts}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.scrollViewContent}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Card product={item} />
          </View>
        )}
      />
    </View>
  );
};

export default MightLike;
