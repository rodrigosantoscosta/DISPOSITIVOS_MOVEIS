import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ei rapai que historinha é essa</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Meu Card</Text>
        <Text style={styles.cardDescription}>Este é um componente de card estilizado usando React Native e TypeScript.</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#343a40',
  },
  cardDescription: {
    fontSize: 14,
    color: '#6c757d',
    lineHeight: 20,
  },
});