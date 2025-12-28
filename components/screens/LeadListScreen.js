import { useEffect, useState } from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/common';
import { loadLeads, saveLeads } from '../utils/storage';


export default function LeadListScreen({ navigation }) {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    async function fetchLeads() {
      const stored = await loadLeads();
      setLeads(stored);
    }
    fetchLeads();
  }, []);

  useEffect(() => {
    saveLeads(leads);
  }, [leads]);

  function deleteLead(id) {
    setLeads(prev => prev.filter(l => l.id !== id));
  }

  return (
    <View style={{ padding: 20 }}>
      <Button title="Add Lead" style={{ marginBottom: 10 }} onPress={() =>
        navigation.navigate('AddLead', { setLeads })
      } />

      <FlatList
        data={leads}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', { lead: item, deleteLead })}
            >
                <View style={styles.card}>
                <Text style={styles.title}>{item.name}</Text>
                <Text>{item.email}</Text>
                </View>
            </TouchableOpacity>
        )}

      />
    </View>
  );
}
