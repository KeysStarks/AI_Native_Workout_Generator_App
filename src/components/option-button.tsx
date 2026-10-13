import { Pressable, StyleSheet, Text } from "react-native";

import { useTheme } from "@/hooks/use-theme";

type OptionButtonProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function OptionButton({ label, selected, onPress }: OptionButtonProps) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: selected ? theme.text : theme.backgroundElement },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          { color: selected ? theme.background : theme.text },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 4,
    borderRadius: 8,
  },
  buttonText: {},
});
