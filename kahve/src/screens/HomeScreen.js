import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { Kahveler} from './Kahveler';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('profil');
    console.log('Profile Basıldı');
  };


  const handleCartPress = () => {
    navigation.navigate('cartlist');
    console.log('Sepete Basıldı');
  };

  const handleCoffeePress = (Coffee) => {
    navigation.navigate('Coffeepage', { Coffee });
    console.log('Coffee Pressed:', Coffee);

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
          <Feather name="user" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Kahveler</Text>
        <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {Kahveler.map((Coffee, index) => (
          <TouchableOpacity
            key={index}
            style={styles.CoffeeContainer}
            onPress={() => handleCoffeePress(Coffee)}
          >
            <Image source={{ uri: Coffee.image }} style={styles.image} />
            <Text style={styles.name}>{Coffee.name}</Text>
            <Text style={styles.price}>Fiyat: {Coffee.price}</Text>
            <Text style={styles.description}>{Coffee.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f57c00',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f57c00',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  profileButton: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  cartButton: {
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  Container: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default HomeScreen;