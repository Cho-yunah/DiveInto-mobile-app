import firebase from '@react-native-firebase/app';
import iid from '@react-native-firebase/iid';
import DeviceInfo from 'react-native-device-info';

export const getToken = async () => {
  const FCMToken = await iid().getToken();

  return FCMToken;
};

export const renewToken = async () => {
  await iid().delete();
  const FCMToken = await getToken();
  // console.log('NEW FCM토큰 : ', FCMToken);

  return FCMToken;
};

export const getModel = () => {
  const model = DeviceInfo.getModel();
  return model;
};
