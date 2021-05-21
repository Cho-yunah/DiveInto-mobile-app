import React, {ReactElement} from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native';
import { SetPasswordProps } from '@navigators/LoginStack/types';

// import style
import { styles } from './styles';

// import components
import SetPassword from '@components/SetPassword';

export default function SetPasswordScreen({
  navigation,
  route,
}: SetPasswordProps): ReactElement {
  const onPress = () => navigation.navigate('LoginWithEmail'); // 다음 페이지를 navigate 안으로 넣어준다.

  return (
    <View style={styles.container}>
      <SetPassword onPress={onPress}/>
    </View>
  );
}