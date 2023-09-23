// About.style.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 19,
  },
  descriptionTitle: {
    color: "#333", // Grey color for normal text
    fontWeight: "bold", // Make the description text bold
    color: "black", // Black color for the description
  },
  description: {
    fontWeight: "300", // Make the description text bold
    color: "black", // Black color for the description
  },
  divider: {
    height: 2,
    backgroundColor: "black", // Black color for the divider
    marginVertical: 8, // Add margin above and below the divider
  },
  image: {
    width: 'auto',
    height: 340,
    resizeMode: "contain",
    marginVertical: 8, // Add margin between images
  },
});

export default styles;
