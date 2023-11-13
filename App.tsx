import { QueryClientProvider } from "@tanstack/react-query";
import { CLIENT } from "./src/hooks/client";
import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <QueryClientProvider client={CLIENT}>
          <Routes />
        </QueryClientProvider>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}
