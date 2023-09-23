import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styles from "./welcome.style";

const Welcome = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.mainContent}>
          <Text style={styles.contentText}>Jacket and Tops</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            suscipit quam id 
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Welcome;
