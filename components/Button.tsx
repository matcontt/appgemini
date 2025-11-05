import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

interface ButtonProps {
  isLoading?: boolean;
  onPress: () => void;
  title?: string;
}

export default function Button({ isLoading, onPress, title = "Enviar" }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      className="bg-blue-500 p-3 rounded mt-4"
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-white text-center">{title}</Text>
      )}
    </TouchableOpacity>
  );
}