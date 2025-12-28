import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'STUDENT_LEADS';

export const saveLeads = async (leads) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(leads));
  } catch (e) {
    console.log('Save error', e);
  }
};

export const loadLeads = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log('Load error', e);
    return [];
  }
};
