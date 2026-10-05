import { Pressable, StyleSheet, Text } from "react-native";

type OptionButtonProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function OptionButton({ label, selected, onPress }: OptionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, selected && styles.buttonSelected]}
    >
      <Text style={[styles.buttonText, selected && styles.buttonTextSelected]}>
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
    backgroundColor: "#eee",
  },
  buttonSelected: {
    backgroundColor: "#222",
  },
  buttonTextSelected: {
    color: "white",
  },
  buttonText: {
    color: "black",
  },
});
