import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_auth } from '../FireBaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const auth = FIREBASE_auth;

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log('Giriş başarılı');
      navigation.navigate('Home');
    } catch (error) {
      console.log('Login error:', error);
      setError('Geçersiz e-posta veya şifre');
    }
  };

  const handleRegister = () => {
    
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
       <ImageBackground
      source={require('../assets/kahveler/GirisEkrani.jpg')} // Arka plan resmi
      style={styles.backgroundImage} // Arka plan resmi stil
    ></ImageBackground>
      <Text style={styles.title}></Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f57c00',
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    width: '70%',
    height: 40,
    borderRadius: 8,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  registerButton: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  registerButtonText: {
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
});

export default Login;
