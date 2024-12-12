import { useEffect, useState } from 'react';
import { View, Alert, Text } from 'react-native';
import { api } from '@/services/api';
import { Categories, CategoriesProps } from "@/components/categories"

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories")
      setCategories(data)
    } catch (erro) {
      console.log(erro)
      Alert.alert("Categorias", "Oops! Falha ao carregar as categorias.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories}/>
    </View>
  )
}
