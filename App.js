import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddLeadScreen from './components/screens/AddLeadScreen';
import LeadDetailScreen from './components/screens/LeadDetailScreen';
import LeadListScreen from './components/screens/LeadListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Leads" component={LeadListScreen} />
        <Stack.Screen name="AddLead" component={AddLeadScreen} />
        <Stack.Screen name="Details" component={LeadDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
