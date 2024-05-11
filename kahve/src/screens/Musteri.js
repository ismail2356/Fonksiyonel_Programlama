import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Musteri = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('name');
        const storedAddress = await AsyncStorage.getItem('address');
        const storedPhoneNumber = await AsyncStorage.getItem('phoneNumber');

        setName(storedName || '');
        setAddress(storedAddress || '');
        setPhoneNumber(storedPhoneNumber || '');
      } catch (error) {
        console.log('Veri alınırken hata oluştu:', error);
      }
    };

    getData();
  }, []);

  const handleFavorites = () => {
    navigation.navigate('favoritelist');
  };

  const handleUpdateInfo = () => {
    navigation.navigate('updateinfo');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Profil Sayfası</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Ad:</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Adres:</Text>
          <Text style={styles.value}>{address}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Telefon Numarası:</Text>
          <Text style={styles.value}>{phoneNumber}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Favoriler" onPress={handleFavorites} />
        <Button title="Bilgileri Güncelle" onPress={handleUpdateInfo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#f57c00',
  },
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  value: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    
  },
});

export default Musteri;
