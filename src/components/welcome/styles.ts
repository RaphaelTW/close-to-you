import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28,
  },
  title: {
    fontSize: 21,
    fontFamily: fontFamily.bold,
    color: colors.gray[600]
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginTop: 12,
    color: colors.gray[500]
  }
})