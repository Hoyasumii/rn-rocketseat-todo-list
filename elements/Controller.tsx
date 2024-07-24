import { Text, TouchableOpacity, View } from "react-native";
import { useTasks } from "@/storage";
import styles from "./Controller.styles";

type ControllerItem = {
  title: string;
  onPress?(): void;
};

type ControllerProps = {
  value: [ControllerItem, ControllerItem];
};

export function Controller({ value }: ControllerProps) {
  const { tasks, onlyFinished } = useTasks();

  return (
    <View style={styles.container}>
      {value.map((item, index) => {
        return (
          <TouchableOpacity
            key={`controller-${index}`}
            activeOpacity={1}
            onPress={item.onPress}
            style={styles.item}
          >
            <Text style={index % 2 === 0 ? styles.blue : styles.purple}>
              {item.title}
            </Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>
                {index % 2 === 0 ? tasks.length : onlyFinished.length}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
