import { Colors } from "@/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.base.gray500,
    borderWidth: 1,
    borderColor: Colors.base.gray400,
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: Colors.base.gray100,
    fontSize: 14,
    fontFamily: "Inter-Regular",
    flex: 1,
  },
});
