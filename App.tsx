import 'react-native-gesture-handler'; // navigator, production 시 필수.

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import LegacyStack from '@legacy_navigators/LegacyStack';
import LoginStack from '@navigators/LoginStack';

// redux
import initStore from '@legacy_lib/redux/store';
import CommunityStack from './src/navigators/CommunityStack';

const store = initStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <LegacyStack /> */}
        <LoginStack />
        {/* <CommunityStack/> */}
      </NavigationContainer>
    </Provider>
  );
}
