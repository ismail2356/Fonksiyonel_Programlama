import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
const handleGetStarted = () => {
  
  console.log('Başlayın düğmesine basıldı');
};
const WelcomeScreen = () => {
  return (

    <View style={styles.container}>
     {}
      <Text style={styles.title}>Kahve Dünyasına hoşgeldiniz!</Text>
      <Text style={styles.subtitle}>Basit ve Güçlü Bir Uygulama</Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Hade başlıyalım</Text>
      </TouchableOpacity>
    </View>
  );

  
}

export default WelcomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
