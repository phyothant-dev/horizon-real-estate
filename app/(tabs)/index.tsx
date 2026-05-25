import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { useAuthStore } from '@/store/useAuthStore'

const FEATURED_PROPERTIES = [
  { id: '1', title: 'Modern Downtown Apt', price: '$450,000', beds: 2, baths: 1, sqft: 850 },
  { id: '2', title: 'Suburban Family Home', price: '$750,000', beds: 4, baths: 3, sqft: 2200 },
  { id: '3', title: 'Beachfront Villa', price: '$1,200,000', beds: 5, baths: 4, sqft: 3500 },
]

export default function HomeScreen() {
  const user = useAuthStore((s) => s.user)

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 pt-16 pb-4">
        <Text className="text-3xl font-bold text-gray-900">
          {user ? `Welcome${user.email ? `, ${user.email.split('@')[0]}` : ''}` : 'Horizon Real Estate'}
        </Text>
        <Text className="text-gray-500 mt-1">Find your dream property</Text>
      </View>

      {!user && (
        <View className="px-6 mb-6 flex-row gap-3">
          <Link href="/auth/login" asChild>
            <TouchableOpacity className="flex-1 bg-blue-600 py-3 rounded-xl items-center">
              <Text className="text-white font-semibold">Sign In</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/auth/register" asChild>
            <TouchableOpacity className="flex-1 border border-blue-600 py-3 rounded-xl items-center">
              <Text className="text-blue-600 font-semibold">Register</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}

      <View className="px-6 mb-4">
        <Text className="text-xl font-semibold text-gray-900 mb-3">Featured Properties</Text>
        {FEATURED_PROPERTIES.map((p) => (
          <Link key={p.id} href={`/property/${p.id}`} asChild>
            <TouchableOpacity className="bg-gray-50 p-4 rounded-xl mb-3 border border-gray-200">
              <Text className="text-lg font-semibold text-gray-900">{p.title}</Text>
              <Text className="text-blue-600 font-bold text-xl mt-1">{p.price}</Text>
              <Text className="text-gray-500 mt-1">{p.beds} bed • {p.baths} bath • {p.sqft} sqft</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  )
}
