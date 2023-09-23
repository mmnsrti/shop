import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20, // Add margin to create space between cards
  },
  image: {
    width: "100%", // Use percentage to make it responsive
    aspectRatio: 1, // Maintain aspect ratio for the image
    borderRadius: 10, // Match the container's border radius
  },
  name: {
    fontSize: 18,
    fontWeight: "600", 
    color: "#444" 
  },
  price: {
    fontSize: 14,
    color: "green",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  icon: {
    fontSize: 24, // Use font size for icon sizing
  },
});

export default styles;
