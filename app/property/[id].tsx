import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router'

const PROPERTY_DATA: Record<string, any> = {
  '1': { title: 'Modern Downtown Apt', price: '$450,000', beds: 2, baths: 1, sqft: 850, type: 'Apartment', description: 'Stunning modern apartment in the heart of downtown with floor-to-ceiling windows, gourmet kitchen, and rooftop access.' },
  '2': { title: 'Suburban Family Home', price: '$750,000', beds: 4, baths: 3, sqft: 2200, type: 'House', description: 'Beautiful family home in a quiet suburban neighborhood with a large backyard, updated kitchen, and finished basement.' },
  '3': { title: 'Beachfront Villa', price: '$1,200,000', beds: 5, baths: 4, sqft: 3500, type: 'Villa', description: 'Luxurious beachfront villa with private pool, ocean views, and premium finishes throughout.' },
}

export default function PropertyDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const property = PROPERTY_DATA[id ?? '']

  if (!property) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <Text className="text-gray-500">Property not found</Text>
      </View>
    )
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 pt-4 pb-8">
        <Text className="text-3xl font-bold text-gray-900 mt-4">{property.title}</Text>
        <Text className="text-blue-600 font-bold text-3xl mt-2">{property.price}</Text>

        <View className="flex-row mt-4 gap-4">
          <View className="bg-gray-100 px-4 py-2 rounded-lg">
            <Text className="text-gray-600 text-sm">Bedrooms</Text>
            <Text className="text-gray-900 font-bold">{property.beds}</Text>
          </View>
          <View className="bg-gray-100 px-4 py-2 rounded-lg">
            <Text className="text-gray-600 text-sm">Bathrooms</Text>
            <Text className="text-gray-900 font-bold">{property.baths}</Text>
          </View>
          <View className="bg-gray-100 px-4 py-2 rounded-lg">
            <Text className="text-gray-600 text-sm">Sq Ft</Text>
            <Text className="text-gray-900 font-bold">{property.sqft}</Text>
          </View>
        </View>

        <Text className="text-gray-500 text-sm mt-2">{property.type}</Text>

        <Text className="text-gray-700 mt-6 leading-6">{property.description}</Text>

        <TouchableOpacity className="bg-blue-600 py-4 rounded-xl items-center mt-8">
          <Text className="text-white font-bold text-lg">Contact Agent</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
