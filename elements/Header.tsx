import { View } from "react-native";
import { Image, ImageSource } from "expo-image";
import styles from "./Header.styles";
import { Button, Input } from "@/components";
import { SetState } from "@/types";
import { useTasks } from "@/storage";

type HeaderProps = {
  imageSrc: ImageSource;
  value: string;
  setValue: SetState<string>;
  active: boolean;
  setActive: SetState<boolean>;
};

export function Header({
  imageSrc,
  active,
  setActive,
  setValue,
  value,
}: HeaderProps) {
  const {append} = useTasks();
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSrc} contentFit="contain" />
      <View style={styles.input}>
        <Input
          value={value}
          setValue={setValue}
          placeholder="Adicione uma nova tarefa"
          active={active}
          setActive={setActive}
        />
        <Button variation="create" onPress={() => {
          append({ name: value });
          setValue("");
        }} />
      </View>
    </View>
  );
}
