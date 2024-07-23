import { Image, ImageSourcePropType, View } from "react-native";
import styles from "./Header.styles";
import { Button, Input } from "@/components";
import { SetState } from "@/types";

type HeaderProps = {
  imageSrc: ImageSourcePropType;
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
  return (
    <View style={styles.container}>
      <Image source={imageSrc} style={styles.image} />
      <View style={styles.input}>
        <Input
          value={value}
          setValue={setValue}
          placeholder="Adicione uma nova tarefa"
          active={active}
          setActive={setActive}
        />
        <Button variation="create" />
      </View>
    </View>
  );
}
