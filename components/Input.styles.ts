import { StyleSheet } from "react-native";
import { Colors } from "@/styles";

export default StyleSheet.create({
  input: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.base.gray500,
    borderWidth: 1.5,
    borderColor: Colors.base.gray700,
    color: Colors.base.gray100,
    fontFamily: "Inter-Regular",
    fontSize: 16
  },
  inputActive: {
    borderColor: Colors.product.purpleDark,
  },
});
