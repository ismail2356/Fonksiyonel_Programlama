import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import Favoriler from './Favoriler'; // Favoriler bileşenini import et

const Musteri = () => {
  // Favori kahveleri saklamak için bir state tanımla
  const [favoriKahveler, setFavoriKahveler] = useState([]);

  // Favorileri gösterme fonksiyonu
  const handleFavorileriGoster = () => {
    // Favorileri göstermek için bir alert kullanabilirsiniz
    alert('Favori Kahveler: ' + favoriKahveler.join(', '));
  };

  // Kart eklemek için fonksiyon
  const handleKartEkle = () => {
    // Kart ekleme işlemleri burada yapılacak
    // Örnek bir işlem: Favori kahvelere rastgele bir kahve ekleyelim
    const kahve = 'Rastgele Kahve'; // Örnek bir kahve
    setFavoriKahveler([...favoriKahveler, kahve]);
  };

  return (
    <ImageBackground source={require('../../assets/kahveler/MusteriArkaPlan.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Müşteri Ekranı</Text>
        <Favoriler favorites={favoriKahveler} />
        <View style={styles.buttonContainer}>
          <Button title="Kart Ekle" onPress={handleKartEkle} color="#f57c00" />
          <Button title="Favorilerimi Görüntüle" onPress={handleFavorileriGoster} color="#f57c00" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f57c00', // Kapalı turuncu renk
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '80%',
  },
});

export default Musteri;
