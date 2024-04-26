import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Pressable } from 'react-native';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../../assets/girisekrani.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Kahve Dünyasına Hoş Geldiniz!</Text>
        <TextInput
  style={[styles.input, styles.textInputBackground, styles.textInputText]}
  placeholder="E-posta Adresi"
  onChangeText={text => setEmail(text)}
/>



<TextInput
  style={[styles.input, styles.textInputBackground, styles.textInputText]}
  placeholder="Şifre"
  secureTextEntry={true}
  onChangeText={text => setPassword(text)}
/>

      


        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('kahve') } style={styles.button}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
          {/* Kayıt Ol buttonu eklendi */}
          <TouchableOpacity onPress={() => navigation.navigate('musteri') } style={styles.button}>
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity  style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Şifremi Unuttum?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: '#f57c00',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#f57c00',
    fontSize: 16,
  },
  textInputText: {
    color: '#f57c00', // turuncu renk
    important: true,
  },
  textInputBackground: {
    backgroundColor: 'white',
  },
  botoon:{
    width:'30',
    height:50,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',

  }
 
});

export default LoginPage;
