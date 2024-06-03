import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdateInfoPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleUpdateInfo = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('address', address);
      await AsyncStorage.setItem('phoneNumber', phoneNumber);
      console.log('Profil bilgileri başarıyla güncellendi!');
    } catch (error) {
      console.log('Profil bilgileri güncellenirken hata oluştu:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Bilgilerini Güncelle</Text>
      <TextInput
        style={styles.input}
        placeholder="Ad"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Adres"
        onChangeText={text => setAddress(text)}
        value={address}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefon Numarası"
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <Button title="Güncelle" onPress={handleUpdateInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
});

export default UpdateInfoPage;
