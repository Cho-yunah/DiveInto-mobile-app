import React, { ReactElement } from 'react';
import { ScrollView, View } from 'react-native';
import { SetPasswordProps } from '@navigators/LoginStack/types';

// import style
import { styles } from './styles';

// import components
import { SetPassword } from '@components/SetPassword';
import NextButton from '@components/common/NextButton';

export default function SetPasswordScreen({
  navigation,
  route,
}: SetPasswordProps): ReactElement {
  const onPress = () => navigation.navigate('MemberInfo');

  navigation.setOptions({
    headerRight: () => <NextButton onPress={onPress} disable={true} />,
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <SetPassword />
      </ScrollView>
    </View>
  );
}
