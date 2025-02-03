import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

/**
 * The root layout component for the app.
 * 
 * It wraps the entire app with a React Query client and a Gluestack UI provider.
 * The Gluestack UI provider sets up the theme and styling for the app.
 * 
 * @returns The JSX element for the root layout.
 */
export default function RootLayout() {

  return (<GestureHandlerRootView>
  <QueryClientProvider client={queryClient}>
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen name="planet/[id]" options={{
          headerBackTitle: "Planets",
          headerTitle: "Planet Detail"
        }} />
      </Stack>
    </GluestackUIProvider>
  </QueryClientProvider>
  </GestureHandlerRootView>);
}
