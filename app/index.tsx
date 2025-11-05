import { Button } from "@/components/Button";
import { PromptText } from "@/components/PromptText";
import { ResponseBox } from "@/components/ResponseBox";
import '@/global.css';
import axios from "axios";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

export default function Index() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [isCreativeMode, setIsCreativeMode] = useState(false);
  const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

  const consultarGemini = async (pregunta: string) => {
    setIsLoading(true);
    setResponse("");

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                { text: isCreativeMode ? `Genera una idea creativa o historia corta sobre: ${pregunta}` : pregunta },
              ],
            },
          ],
          generationConfig: {
            temperature: isCreativeMode ? 0.9 : 0.5,
            maxOutputTokens: 500,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": API_KEY,
          },
        }
      );

      const result = response.data.candidates[0].content.parts[0].text;
      setResponse(result);
    } catch (error) {
      setResponse("Error al conectar con Gemini. Verifica tu API Key.");
      console.error(error);
    } finally {
      setValue("");
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView className="flex-1 bg-gray-900">
      <ScrollView contentContainerClassName="p-6 items-center">
        <View className="mb-6">
          <Text className="text-3xl font-bold text-pink-500 text-center">
            {isCreativeMode ? "Gemini Creativo" : "Gemini Normal"}
          </Text>
        </View>
        <View className="w-full max-w-md">
          <PromptText onChangeText={setValue} value={value} />
          <Button
            isLoading={isLoading}
            onPress={() => consultarGemini(value)}
            title="Enviar"
          />
          <Button
            variant="secondary"
            title={isCreativeMode ? "Modo Normal" : "Modo Creativo"}
            onPress={() => setIsCreativeMode(!isCreativeMode)}
          />
          {response && <ResponseBox>{response}</ResponseBox>}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}