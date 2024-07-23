import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { useState } from "react";

import styles from "./index.styles";
import { Input } from "@/components";

export default function Index() {
  const [value, setValue] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (active) {
          Keyboard.dismiss();
          setActive(false);
        }
      }}
    >
      <SafeAreaView style={styles.container}>
        <Image
          source={require(`@/assets/images/logo.png`)}
          style={{ maxWidth: "30%", objectFit: "contain" }}
        />
        <Input
          value={value}
          setValue={setValue}
          placeholder="Adicione uma nova tarefa"
          active={active}
          setActive={setActive}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
