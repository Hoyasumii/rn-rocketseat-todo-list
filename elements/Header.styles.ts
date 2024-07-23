import { StyleSheet } from "react-native";
import { Colors } from "@/styles";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.base.gray700,
    padding: 24,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    gap: 5,
    marginBottom: 20,
    
  },
  image: {
    minWidth: "35%",
    minHeight: 90,
  },
  input: {
    position: "absolute",
    bottom: -40,
    flexDirection: "row",
    gap: 5,
    zIndex: 2
  }
});