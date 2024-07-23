import { StyleSheet } from "react-native";
import { Colors } from "@/styles";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.base.gray700,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    gap: 5,
    marginBottom: 20,
  },
  image: {
    width: "35%",
    objectFit: "contain"
  },
  input: {
    position: "absolute",
    bottom: -40,
    flexDirection: "row",
    gap: 5,
    zIndex: 2
  }
});