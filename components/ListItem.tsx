import { Task } from "@/types";
import { useTasks } from "@/storage";
import { Text, View, Alert } from "react-native";
import { Button } from "./Button";
import styles from "./ListItem.styles";

type ListItemProps = {
  item: Task;
};

export function ListItem({ item }: ListItemProps) {
  const { remove } = useTasks();

  const removeItem = () => {
    Alert.alert("", `Realmente deseja remover a Task "${item.name}"? `, [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        style: "default",
        onPress: () => {
          remove(item.id);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <Button variation="delete" onPress={removeItem} />
    </View>
  );
}
