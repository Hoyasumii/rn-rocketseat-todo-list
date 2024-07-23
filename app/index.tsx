import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Colors } from "@/styles";
import styles from "./index.styles";
import { Controller, EmptyList, Header } from "@/elements";
import { useTasks } from "@/storage";

export default function Index() {
  const [value, setValue] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const { totalCount, finishedCount } = useTasks();

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
        <View style={styles.taskArea}>
          <Controller
            value={[{ title: "Criadas" }, { title: "Finalizadas" }]}
          />
          <FlatList<string>
            style={styles.taskAreaList}
            data={[]}
            keyExtractor={(i) => i}
            renderItem={({ item, index }) => {
              return <Text>item</Text>;
            }}
            ListEmptyComponent={EmptyList}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
