import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 30,
    alignItems: "stretch",
  },
  button: {
    backgroundColor: "#a8a53e",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cartContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",

  },
  cartCount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  typeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
  },
  wishlistContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30, // Add margin to create space between cart and wishlist
  },
  addToWishlist: {
    flexDirection: "row",
    alignItems: "center",
  },
  addToWishlistText: {
    fontSize: 14,
    color:'#a8a53e',
    marginLeft: 15, // Add margin to create space between heart icon and text
  },
});

export default styles;
