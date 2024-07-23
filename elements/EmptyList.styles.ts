import { StyleSheet } from "react-native";
import { Colors } from "@/styles";

export default StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: Colors.base.gray300,
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: "center",
    gap: 10
  },
  centralize: {
    alignItems: "center"
  },
  text: {
    color: Colors.base.gray300,
    fontFamily: "Inter-Regular",
  }, 
  textBold: {
    color: Colors.base.gray300, 
    fontFamily: "Inter-Bold"
  },
})
