import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { useAuthStore } from '@/store/useAuthStore'
import '@/global.css'

export { ErrorBoundary } from 'expo-router'

export default function RootLayout() {
  const checkSession = useAuthStore((s) => s.checkSession)

  useEffect(() => {
    checkSession()
  }, [])

  return (
    <GluestackUIProvider mode="light">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="auth/login" options={{ headerShown: true, title: 'Sign In' }} />
        <Stack.Screen name="auth/register" options={{ headerShown: true, title: 'Create Account' }} />
        <Stack.Screen name="property/[id]" options={{ headerShown: true, title: 'Property Details' }} />
      </Stack>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  )
}
