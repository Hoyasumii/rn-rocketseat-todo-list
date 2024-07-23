import { StyleSheet } from "react-native";
import { Colors } from "@/styles";

export default StyleSheet.create({
  create: {
    backgroundColor: Colors.product.blueDark,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  createText: {
    color: Colors.base.gray100,
    fontSize: 20,
  },
  delete: {
    backgroundColor: Colors.base.gray400,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    width: 32,
    height: 32,
    alignSelf: "center"
  },
  deleteText: {
    fontSize: 14,
    color: Colors.feedback.danger,
  },
});
