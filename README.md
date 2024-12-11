# CLOSE TO YOU

###  Icons
```
npm install @tabler/icons-react-native
```

### Como os itens é em SVG para conseguir renderizar
```
 npx expo install react-native-svg
```

### Certifique-se de que suas dependências estão corretas
#### Verifique se há outros pacotes desatualizados ou incompatíveis:
```
npm outdated
```

### Limpe o cache do Expo
#### Às vezes, problemas podem surgir devido a caches antigos. Limpe os caches com o comando:
```
npx expo start --clear
```
ou
```
npx expo --reset-cache
```
### Se persistir limpe o cache do Metro Bundler e do 
#### Cache residual pode causar travamentos. Execute os comandos abaixo para limpar:

```
rm -rf .expo
rm -rf node_modules
npm cache clean --force
npx expo start --clear
```
