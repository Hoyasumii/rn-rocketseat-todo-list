import { Colors } from "@/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  item: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  blue: {
    color: Colors.product.blue,
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  purple: {
    color: Colors.product.purple,
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  amountContainer: {
    backgroundColor: Colors.base.gray400,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  amount: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    color: Colors.base.gray200,
  }
});