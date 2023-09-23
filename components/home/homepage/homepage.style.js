import { StyleSheet, Dimensions, Platform } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    padding: 25, // Adjust padding to create space around content
    
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  cardContainer: {
    width: "48%",
    paddingBottom: 0,
    marginBottom: 0,
    backgroundColor: "#fff",
    borderRadius: 10,
    ...Platform.select({
      android: {
        elevation: 0, // Add elevation for Android box shadow
      },
      ios: {
        shadowColor: "#000", // iOS box shadow properties
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }),
  },
  addProductButton: {
    width: "100%",
    height:250,
    backgroundColor: "grey", 
    borderRadius: 10, 
    alignItems: "center", 
    justifyContent: "center", 
  },

  addProductText: {
    fontSize: 24, 
    color: "white", 
    fontWeight: "bold", 
  },  SelectImgButton: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 4,
  },
  SelectImgButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "green",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 4,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 4,
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
