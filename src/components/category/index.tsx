import { Text, Pressable, PressableProps } from "react-native"
import { styles } from "./styles"
import { categoriesIcons } from "@/utils/categories-icons"

type Props = PressableProps & {
  name: string
  iconId: string
  isSelected: boolean
}

export function Category({ name, iconId, isSelected = false, ...rest}: Props) {
  const icon = categoriesIcons[iconId]

  return (
    <Pressable style={[styles.container]}>
      <Icon size={16} />
      <Text style={[styles.name]}>{name}</Text>
    </Pressable>
  )
}