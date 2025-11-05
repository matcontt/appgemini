import React from "react";
import { View, Text } from "react-native";

interface ResponseBoxProps {
  children: string;
}

export function ResponseBox({ children }: ResponseBoxProps) {
  return (
    <View className="mt-4 p-4 bg-gray-700 rounded-lg w-full max-w-md">
      <Text className="text-white text-base leading-relaxed">{children}</Text>
    </View>
  );
}