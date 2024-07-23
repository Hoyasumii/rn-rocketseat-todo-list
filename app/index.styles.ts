import { StyleSheet } from "react-native";
import { Colors } from "@/styles";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.base.gray700,
    flex: 1,
  },
  taskArea: {
    backgroundColor: Colors.base.gray600,
    flex: 1,
    zIndex: -1
  }
});
