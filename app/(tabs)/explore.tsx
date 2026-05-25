import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const MOCK_LISTINGS = [
  { id: '1', title: 'Modern Downtown Apt', price: '$450,000', type: 'Apartment' },
  { id: '2', title: 'Suburban Family Home', price: '$750,000', type: 'House' },
  { id: '3', title: 'Beachfront Villa', price: '$1,200,000', type: 'Villa' },
  { id: '4', title: 'City Condo', price: '$320,000', type: 'Condo' },
  { id: '5', title: 'Mountain Retreat', price: '$890,000', type: 'Cabin' },
]

export default function ExploreScreen() {
  const [query, setQuery] = useState('')

  const filtered = MOCK_LISTINGS.filter(
    (p) => p.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <View className="flex-1 bg-white">
      <View className="px-6 pt-16 pb-4">
        <Text className="text-3xl font-bold text-gray-900">Explore</Text>
        <TextInput
          className="mt-4 bg-gray-100 px-4 py-3 rounded-xl text-gray-900"
          placeholder="Search properties..."
          placeholderTextColor="#9CA3AF"
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <ScrollView className="flex-1 px-6">
        {filtered.map((p) => (
          <TouchableOpacity key={p.id} className="bg-gray-50 p-4 rounded-xl mb-3 border border-gray-200">
            <Text className="text-lg font-semibold text-gray-900">{p.title}</Text>
            <Text className="text-blue-600 font-bold text-xl mt-1">{p.price}</Text>
            <Text className="text-gray-500 mt-1">{p.type}</Text>
          </TouchableOpacity>
        ))}
        {filtered.length === 0 && (
          <Text className="text-gray-400 text-center mt-10">No properties found</Text>
        )}
      </ScrollView>
    </View>
  )
}
