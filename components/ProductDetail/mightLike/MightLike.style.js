import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 0, 
    padding: 16, // Adjust margin as needed
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 16,
  },
  scrollViewContent: {
    flexDirection: "row", // Arrange items horizontally
    alignItems: "center", // Center items vertically
    paddingHorizontal: 10, // Add horizontal padding to the content
  },
  cardContainer: {
    marginRight: 20, // Add some spacing between cards
  },
});

export default styles;
