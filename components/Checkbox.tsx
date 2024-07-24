import { View } from "react-native";
import styles from "./Checkbox.styles";
import { Check } from "@/assets/images/svg";

type CheckboxProps = {
  checked?: boolean;
};

export function Checkbox({ checked }: CheckboxProps) {
  return (
    <View style={[styles.container, checked && styles.checked]}>
      { checked && <Check /> }
    </View>
  );
}
