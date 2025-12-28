import { useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import styles from '../styles/common';

export default function AddLeadScreen({ route, navigation }) {
  const { setLeads } = route.params;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function saveLead() {
    if (!name || !email) {
      Alert.alert('Error', 'All fields required');
      return;
    }

    setLeads(prev => [
      ...prev,
      { id: Date.now().toString(), name, email }
    ]);

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Save Lead" onPress={saveLead} />
    </View>
  );
}
