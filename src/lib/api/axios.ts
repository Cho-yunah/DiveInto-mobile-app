import AsyncStorage from '@react-native-community/async-storage';
import axios, { AxiosInstance } from 'axios';

export const baseURL = 'http://52.79.225.4:8081';

const instance = axios.create({
  baseURL,
});

export const getInstanceATK = async (): Promise<AxiosInstance> => {
  const instaceATK = axios.create({
    baseURL,
    headers: { Authorization: await AsyncStorage.getItem('atk') },
  });

  return instaceATK;
};

// 사용 가능한가 ??
// export const requestDeleteInBody = async (payload: {
//   string: any;
// }): Promise<AxiosInstance> => {
//   const instancePayload = axios.create({
//     baseURL,
//     headers: { Authorization: await AsyncStorage.getItem('atk') },
//     data: payload,
//   });

//   return instancePayload;
// };
export default instance;
