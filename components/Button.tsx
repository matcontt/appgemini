import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

interface ButtonProps {
  isLoading?: boolean;
  onPress: () => void;
  title?: string;
  variant?: "primary" | "secondary";
}

export  function Button({ isLoading, onPress, title = "Enviar", variant = "primary" }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg mt-4 w-full";
  const variantStyles = variant === "primary" ? "bg-blue-600 text-white" : "bg-gray-600 text-white";

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      className={`${baseStyles} ${variantStyles} ${isLoading ? "opacity-50" : ""}`}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-center">{title}</Text>
      )}
    </TouchableOpacity>
  );
}