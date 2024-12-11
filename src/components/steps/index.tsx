import { View, Text } from "react-native"
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"
import { styles } from "./styles"
import { Step } from "../step"

export function Steps() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Veja como funciona:</Text>

      <Step 
      icon={ IconMapPin }
      title="Encontre estabelecimentos"
      description="Veja locais perto de você que são parceiros Close To You"
      />

    <Step 
    icon={ IconQrcode }
      title="Ative o cupom com QrCode"
      description="Escaneie o código no estabelecimento para usar o beneficio"
      />

    <Step 
    icon={ IconTicket }
      title="Garanta vantagens perto de voce"
      description="Ative cupons onde estiver, em diferentes tipos de estabelecimentos"
      />
    </View>
  )
}