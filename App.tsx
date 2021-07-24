import 'react-native-gesture-handler'; // navigator, production 시 필수.

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { IsLogin } from '@recoil/Global';

import LegacyStack from '@legacy_navigators/LegacyStack';
import LoginStack from '@navigators/LoginStack';
import MainTab from '@/src/navigators/MainTab';
import AdmMyLectureStack from '@navigators/MyLectureStack/AdmMyLectureStack';

import UploadTest from '@screens/UploadTest';

// redux
import initStore from '@legacy_lib/redux/store';
const store = initStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* 레거시 */}
        {/* <LegacyStack /> */}

        {/* 파일업로드 테스트 */}
        {/* <RecoilRoot>
          <UploadTest />
        </RecoilRoot> */}

        {/* 리뉴얼 */}
        <RecoilRoot>
          {/* <AdmMyLectureStack /> */}
          <SelectNavigator />
        </RecoilRoot>
      </NavigationContainer>
    </Provider>
  );
}

const SelectNavigator = () =>
  useRecoilValue(IsLogin) ? <MainTab /> : <LoginStack />;
