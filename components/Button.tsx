import { Text, TouchableOpacity } from "react-native";
import Antd from "@expo/vector-icons/AntDesign";
import styles from "./Button.styles";
import { Trash } from "@/assets/images/svg";

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
      {variation === "create" ? (
        <Antd name="pluscircleo" style={styles.createText} />
      ) : (
        <Trash width={18} height={18} />
      )}
    </TouchableOpacity>
  );
}
