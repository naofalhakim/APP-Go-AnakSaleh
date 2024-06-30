import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log('error store data to local:', e)
    }
  };

const storeDataString = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch(e) {
        console.log('error store data to local:', e)
    }
  }

const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('error reading data from local:', e)
    }
  };

const getDataString = async (key) => {
    try {
      return await AsyncStorage.getItem(key)
    } catch(e) {
        console.log('error reading data from local:', e)
    }
  }


export {storeData, storeDataString, getData, getDataString}