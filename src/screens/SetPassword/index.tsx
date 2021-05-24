import React, { ReactElement } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { SetPasswordProps } from '@navigators/LoginStack/types';

// import style
import { styles } from './styles';

// import components
import SetPassword from '@components/SetPassword';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SetPasswordScreen({
  navigation,
  route,
}: SetPasswordProps): ReactElement {
  const onPress = () => navigation.navigate('LoginWithEmail');

  navigation.setOptions({
    headerRight: () => <NextButton onPress={onPress} />,
  });

  return (
    <View style={styles.container}>
      <SetPassword />
    </View>
  );
}
