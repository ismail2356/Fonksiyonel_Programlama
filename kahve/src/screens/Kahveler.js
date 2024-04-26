import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
const Kahveler = () => {
  const navigation = useNavigation();

  // Kahve bilgilerini içeren bir dizi
  const coffees = [
    {
      id: 1,
      name: "Espresso",
      description: "İnce öğütülmüş kahve çekirdeklerinden buharın geçirilmesiyle yapılan güçlü ve lezzetli kahve.",
      price: 60,
      image: require('../../assets/kahveler/espresso.jpg'), // Kahve resmi
    },
    {
      id: 2,
      name: "Latte",
      description: "Espresso ve buharlanmış sütle yapılan kahve.",
      price: 50,
      image: require('../../assets/kahveler/latte.jpg'), // Kahve resmi
    },
    {
      id: 3,
      name: "Cappuccino",
      description: "Eşit miktarda espresso, buharlanmış süt ve süt köpüğünden yapılan kahve.",
      price: 80,
      image: require('../../assets/kahveler/cappuccino.jpg'), // Kahve resmi
    },
    {
      id: 4,
      name: "Mocha",
      description: "Espresso, sıcak süt ve çikolata şurubu ile yapılan kahve.",
      price: 100,
      image: require('../../assets/kahveler/mocha.jpg'), // Kahve resmi
    },
    {
      id: 5,
      name: "Americano",
      description: "Espresso sıcak suyla seyreltilir.",
      price: 90,
      image: require('../../assets/kahveler/americano.jpg'), // Kahve resmi
    },
    {
      id: 6,
      name: "Macchiato",
      description: "Espressoya az miktarda süt köpüğü eklenir.",
      price: 95,
      image: require('../../assets/kahveler/macchiato.jpg'), // Kahve resmi
    },
    {
      id: 7,
      name: "Turkish Coffee",
      description: "Geleneksel kahve hazırlama yöntemi, ince öğütülmüş kahve çekirdeklerinin şekerle kaynatılıp, filtrelenmeden servis edilmesidir.",
      price: 100,
      image: require('../../assets/kahveler/turkish_coffee.jpg'), // Kahve resmi
    },
    {
      id: 8,
      name: "Iced Coffee",
      description: "Buz küpleriyle soğutulmuş kahve, genellikle şekerli veya sütle servis edilir.",
      price: 95,
      image: require('../../assets/kahveler/iced_coffee.jpg'), // Kahve resmi
    },
    {
      id: 9,
      name: "Flat White",
      description: "Espresso ve buharlanmış sütle yapılan, latteye benzer ancak kahve/süt oranı daha yüksek ve kadifemsi bir dokuya sahip kahve içeceği.",
      price: 100,
      image: require('../../assets/kahveler/flat_white.jpg'), // Kahve resmi
    },
    {
      id: 10,
      name: "Vienna Coffee",
      description: "Kahvenin üzerine çırpılmış krema eklenir ve genellikle tarçın veya çikolatayla tatlandırılır.",
      price: 120,
      image: require('../../assets/kahveler/vienna_coffee.jpg'), // Kahve resmi
    },
    {
      id: 11,
      name: "Irish Coffee",
      description: "Sıcak kahve, İrlanda viskisi ve şekerden oluşan, üstüne krema konan kahve kokteyli.",
      price: 120,
      image: require('../../assets/kahveler/irish_coffee.jpg'), // Kahve resmi
    },
    {
      id: 12,
      name: "Affogato",
      description: "İtalyan kahvesi bazlı, vanilyalı dondurma veya üzerine bir shot sıcak espresso eklenmiş dondurmadan yapılan tatlı.",
      price: 120,
      image: require('../../assets/kahveler/affogato.jpg'), // Kahve resmi
    },
    {
      id: 13,
      name: "Dalgona Coffee",
      description: "Çırpılmış kahve, hazır kahve, şeker ve sıcak suyun krema kıvamına gelinceye kadar çırpılması ve ardından soğuk veya sıcak sütün üzerine dökülmesiyle yapılır.",
      price: 110,
      image: require('../../assets/kahveler/dalgona_coffee.jpg'), // Kahve resmi
    },
    {
      id: 14,
      name: "Ristretto",
      description: "Aynı miktarda kahve ancak yarısı kadar su ile yapılan kısa shot espresso, daha konsantre ve daha koyu bir tada neden olur.",
      price: 85,
      image: require('../../assets/kahveler/ristretto.jpg'), // Kahve resmi
    },
  ];

  // Favoriler state'i ve değiştirme fonksiyonu
  const [favorites, setFavorites] = useState([]);

  const handleBuyNow = () => {
    // Satın alma işlemi burada gerçekleştirilebilir
    alert('Buy Now button pressed!');
  };

  const handleAddToFavorites = (coffeeId) => {
    // Favorilere ekleme işlemi burada gerçekleştirilebilir
    setFavorites([...favorites, coffeeId]);
    alert('Kahve favorilere başarıyla eklendi!');
  };

  return (
    <ImageBackground source={require('../../assets/kahveler/kahvelerAp.jpg')} style={styles.background}>
    <ScrollView contentContainerStyle={styles.container}>
      {coffees.map(coffee => (
        <View key={coffee.id} style={styles.coffeeContainer}>
          <Image source={coffee.image} style={styles.image} />
          <Text style={styles.title}>{coffee.name}</Text>
          <Text style={styles.description}>{coffee.description}</Text>
          <Text style={styles.price}>Fiyat: {coffee.price}</Text>
          <TouchableOpacity style={styles.actionButton} onPress={handleAddToFavorites.bind(null, coffee.id)}>
            <Text style={styles.actionButtonText}>Favorilere Ekle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleBuyNow}>
            <Text style={styles.actionButtonText}>Satın Al</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  coffeeContainer: {
    width: '45%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FF9800',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: '#f57c00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 5,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Kahveler;
