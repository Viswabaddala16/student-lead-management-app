import { Button, Text, View } from 'react-native';

export default function LeadDetailScreen({ route, navigation }) {
  const { lead, deleteLead } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {lead.name}</Text>
      <Text>Email: {lead.email}</Text>

      <Button
        title="Delete Lead"
        onPress={() => {
          deleteLead(lead.id);
          navigation.goBack();
        }}
      />
    </View>
  );
}
