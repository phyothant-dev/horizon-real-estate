import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'
import { router } from 'expo-router'
import { useAuthStore } from '@/store/useAuthStore'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = useAuthStore((s) => s.signIn)

  const handleLogin = async () => {
    try {
      await signIn(email, password)
      router.replace('/(tabs)')
    } catch (error: any) {
      Alert.alert('Error', error.message)
    }
  }

  return (
    <View className="flex-1 bg-white px-6 pt-8">
      <Text className="text-2xl font-bold text-gray-900 mb-1">Welcome back</Text>
      <Text className="text-gray-500 mb-8">Sign in to your account</Text>

      <Text className="text-gray-700 mb-1 font-medium">Email</Text>
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-xl text-gray-900 mb-4"
        placeholder="your@email.com"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text className="text-gray-700 mb-1 font-medium">Password</Text>
      <TextInput
        className="bg-gray-100 px-4 py-3 rounded-xl text-gray-900 mb-6"
        placeholder="Your password"
        placeholderTextColor="#9CA3AF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity className="bg-blue-600 py-4 rounded-xl items-center" onPress={handleLogin}>
        <Text className="text-white font-bold text-lg">Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4 items-center" onPress={() => router.push('/auth/register')}>
        <Text className="text-blue-600">Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  )
}
