import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <TextInput
      placeholder="Buscar filme..."
      value={value}
      onChangeText={onChange}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 16,
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    borderColor: "#DDD",
    borderWidth: StyleSheet.hairlineWidth,
  },
});
