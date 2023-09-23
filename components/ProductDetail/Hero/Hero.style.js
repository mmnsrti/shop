// Hero.style.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
   color: "#a8a53e", // Change the color to your preference
    marginBottom: 8,
  },
  size: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    
    color: "#333", // Change the color to your preference
  }, sizeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  sizeLabel: {
    fontSize: 18,
    marginRight: 10,
    color: "#333", // Customize the label text color
  },
  sizePicker: {
    flex: 1, // Takes up remaining horizontal space
    borderColor: "#ccc", // Customize the border color
    borderWidth: 1, // Customize the border width
    borderRadius: 5, // Customize the border radius
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "#333", // Customize the text color
  },
});

export default styles;
