import { StyleSheet } from "react-native";
import { Colors } from "@/styles";

export default StyleSheet.create({
  container: {
    minHeight: 18,
    maxHeight: 18,
    minWidth: 18,
    maxWidth: 18,
    borderWidth: 2,
    borderColor: Colors.product.blueDark,
    backgroundColor: "transparent",
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center"
  },
  checked: {
    borderColor: Colors.product.purple,
    backgroundColor: Colors.product.purple
  }
});
