import React from "react";
import { TextInput } from "react-native";

interface PromptTextProps {
  onChangeText: (text: string) => void;
  value: string;
}

export function PromptText({ onChangeText, value }: PromptTextProps) {
  return (
    <TextInput
      className="border border-gray-300 p-3 mb-4 rounded-lg w-full text-white bg-gray-800"
      placeholder="Escribe tu pregunta..."
      placeholderTextColor="#a0a0a0"
      onChangeText={onChangeText}
      value={value}
      multiline
    />
  );
}