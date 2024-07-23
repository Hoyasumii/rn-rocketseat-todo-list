import { Text, TouchableOpacity } from "react-native";
import Antd from "@expo/vector-icons/AntDesign";
import styles from "./Button.styles";

type ButtonProps = {
  variation: "create" | "delete";
  onPress?(): void;
};

export function Button({ variation, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={variation === "create" ? styles.create : styles.delete}
    >
      <Antd
        name={variation === "create" ? "pluscircleo" : "delete"}
        style={variation === "create" ? styles.createText : styles.deleteText}
      />
    </TouchableOpacity>
  );
}
