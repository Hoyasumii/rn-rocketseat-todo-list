import { Task } from "@/types";
import { useTasks } from "@/storage";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import { Button } from "./Button";
import styles from "./ListItem.styles";
import { Checkbox } from "./Checkbox";

type ListItemProps = {
  item: Task;
};

export function ListItem({ item }: ListItemProps) {
  const { remove, change } = useTasks();

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

  const check = () => {
    change(item.id)
  }

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={check}>
      <Checkbox checked={item.finished} />
      <Text style={[styles.text, item.finished && styles.textFinished]}>{item.name}</Text>
      <Button variation="delete" onPress={removeItem} />
    </TouchableOpacity>
  );
}
