import { SetState } from "@/types";
import { Text, TextInput } from "react-native";
import { useState } from "react";
import styles from "./Input.styles";
import { Colors } from "@/styles";

type InputProps = {
  value: string;
  setValue: SetState<string>;
  active: boolean;
  setActive: SetState<boolean>
  placeholder: string;
};

export function Input({ placeholder, setValue, value, active, setActive }: InputProps) {

  const changeText = (text: string) => {
    setValue(text);
  };

  return (
    <TextInput
      style={[styles.input, active && styles.inputActive]}
      placeholder={placeholder}
      placeholderTextColor={Colors.base.gray300}
      value={value}
      onChangeText={changeText}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    />
  );
}
