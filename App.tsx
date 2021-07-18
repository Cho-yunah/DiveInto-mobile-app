import 'react-native-gesture-handler'; // navigator, production 시 필수.

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { IsLogin } from '@recoil/Global';

import LegacyStack from '@legacy_navigators/LegacyStack';
import LoginStack from '@navigators/LoginStack';
import MainTab from '@/src/navigators/MainTab';

import UploadTest from '@screens/UploadTest';

import * as FCM from '@lib/firebase/FCM';

// redux
import initStore from '@legacy_lib/redux/store';
const store = initStore();

export default function App() {
  useEffect(() => {
    const init = async () => {
      const fcm = await FCM.getToken();
      console.log('fcm Token : ', fcm);
    };

    init();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* 레거시 */}
        {/* <LegacyStack /> */}

        {/* 파일업로드 테스트 */}
        {/* <RecoilRoot> */}
        {/* <UploadTest /> */}
        {/* </RecoilRoot> */}

        {/* 리뉴얼 */}
        <RecoilRoot>
          <SelectNavigator />
        </RecoilRoot>
      </NavigationContainer>
    </Provider>
  );
}

const SelectNavigator = () =>
  useRecoilValue(IsLogin) ? <MainTab /> : <LoginStack />;
