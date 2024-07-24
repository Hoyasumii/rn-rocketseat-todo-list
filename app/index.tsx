import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { useState } from "react";
import styles from "./index.styles";
import { Controller, EmptyList, Header } from "@/elements";
import { useTasks } from "@/storage";
import { ListItem } from "@/components";

export default function Index() {
  const [value, setValue] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const { show, tasks, onlyFinished, setShow } = useTasks();

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
            value={[
              {
                title: "Criadas",
                onPress() {
                  setShow(show === "total" ? "finished" : "total");
                },
              },
              {
                title: "Finalizadas",
                onPress() {
                  setShow(show === "total" ? "finished" : "total");
                },
              },
            ]}
          />
          <FlatList
            style={styles.taskAreaList}
            data={show === "total" ? tasks : onlyFinished}
            keyExtractor={(i) => i.name}
            renderItem={({ item, index }) => {
              return <ListItem item={item} />;
            }}
            ListEmptyComponent={EmptyList}
            ItemSeparatorComponent={() => (
              <View style={styles.taskAreaSeparator} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
