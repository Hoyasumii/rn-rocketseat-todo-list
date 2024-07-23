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
import { Button, Input } from "@/components";
import { Header } from "@/elements";
import { Colors } from "@/styles";

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
      <View style={styles.container}>
        <Header
          imageSrc={require("@/assets/images/logo.png")}
          active={active}
          setActive={setActive}
          value={value}
          setValue={setValue}
        />
        <View style={styles.taskArea}></View>
      </View>
    </TouchableWithoutFeedback>
  );
}
