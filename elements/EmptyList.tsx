import { Clipboard } from "@/assets/images/svg";
import { Text, View } from "react-native";
import styles from "./EmptyList.styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Clipboard width={56} height={56} />
      <View style={styles.centralize}>
        <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
 