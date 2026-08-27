import React from 'react';
import {Image, Style, }
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Definição das propriedades que o Card aceita
interface CardProps {
  title: string;
  description: string;
  onPress?: () => void;
}

export function Card({ title, description, onPress }: CardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={!onPress}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
  container: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666666',
  },
});
