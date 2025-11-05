import React from "react";
import { TextInput } from "react-native";

interface PromptTextProps {
  onChangeText: (text: string) => void;
  value: string;
}

export default function PromptText({ onChangeText, value }: PromptTextProps) {
  return (
    <TextInput
      className="border p-2 mb-4 rounded"
      placeholder="Escribe tu pregunta..."
      onChangeText={onChangeText}
      value={value}
      multiline
    />
  );
}