import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#007ACC",
    padding: 200,
    alignItems: "center",
  },
  headerText: {
    fontSize: 240,
    color: "white",
    fontWeight: "bold",
  },
  mainContent: {
    padding: 16,
  },
  contentText: {
    fontSize: 70,
    fontWeight: "bold", // Apply bold style to all contentText
    color: "black",   // Make the color black
  },
  footer: {
    backgroundColor: "white",
    padding: 16,
  },
  footerText: {
    fontSize: 54,
    color: "#666",
    fontSize: 28,     
    color: "grey",   // Make the color grey
  },
});

export default styles;
