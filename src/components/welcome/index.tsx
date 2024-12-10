import { Image, Text, View } from "react-native"
import { styles } from "./styles"

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={ styles.logo } />

      <Text style={ styles.title }>Boas Vindas ao Close To You!</Text>
      <Text style={ styles.subtitle }>
        Encontre e descubra lugares próximos de você com mais facilidade.
      </Text>
      <Text style={ styles.subtitle }>
        Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
      </Text>
    </View>
  )
}