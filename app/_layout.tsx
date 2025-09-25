import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { useEffect } from 'react';
import { setupErrorLogging } from '../utils/errorLogger';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/commonStyles';

export default function RootLayout() {
  useEffect(() => {
    // Set up global error logging
    setupErrorLogging();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.grey,
            tabBarStyle: {
              backgroundColor: colors.background,
              borderTopColor: colors.border,
              borderTopWidth: 1,
              paddingBottom: Platform.OS === 'ios' ? 20 : 10,
              paddingTop: 10,
              height: Platform.OS === 'ios' ? 90 : 70,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="contacts"
            options={{
              title: 'Contacts',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="call" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="location"
            options={{
              title: 'Location',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="location" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="gallery"
            options={{
              title: 'Gallery',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="images" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
