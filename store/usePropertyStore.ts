import { create } from 'zustand'
import { supabase } from '@/lib/supabase'

export interface Property {
  id: string
  title: string
  description: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  address: string
  city: string
  state: string
  zip: string
  images: string[]
  type: 'house' | 'apartment' | 'condo' | 'townhouse'
  status: 'for_sale' | 'for_rent' | 'sold'
  created_at: string
}

interface PropertyState {
  properties: Property[]
  selectedProperty: Property | null
  isLoading: boolean
  fetchProperties: () => Promise<void>
  fetchPropertyById: (id: string) => Promise<void>
  setSelectedProperty: (property: Property | null) => void
}

export const usePropertyStore = create<PropertyState>((set) => ({
  properties: [],
  selectedProperty: null,
  isLoading: false,
  fetchProperties: async () => {
    set({ isLoading: true })
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    set({ properties: data as Property[], isLoading: false })
  },
  fetchPropertyById: async (id: string) => {
    set({ isLoading: true })
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', id)
      .single()
    if (error) throw error
    set({ selectedProperty: data as Property, isLoading: false })
  },
  setSelectedProperty: (property) => set({ selectedProperty: property }),
}))
