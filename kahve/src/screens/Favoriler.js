import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favoriler = ({ favorites }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      {favorites.map(coffeeId => (
        <Text key={coffeeId} style={styles.item}>Kahve ID: {coffeeId}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Favoriler;
