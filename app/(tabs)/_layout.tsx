import { Tabs } from 'expo-router';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

/**
 * Renders a tab layout with two screens: "All" and "Favorites".
 * Each screen has a corresponding title and tabBarIcon.
 * The active tab icon color is set to black and the header title is "Planets of the solar system".
 */
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black', headerTitle: 'Planets of the solar system' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'All',
          tabBarIcon: ({ color, focused }) => <Fontisto size={18} name={focused ? "world" : "world-o"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, focused }) => <MaterialIcons size={18} name={focused ? "favorite" : "favorite-outline"} color={color} />,
        }}
      />
    </Tabs>
  );
}
