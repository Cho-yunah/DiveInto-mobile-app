import React, {ReactElement} from 'react'
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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => 
            navigation.navigate("LoginWithEmail")}> 
            {/* 뒤의 페이지를 넣어야 함 */}
          <Text style={{ color: "#FFFFFF", paddingHorizontal: 18, fontSize: 16 }}>
            다음
          </Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SetPassword />
    </View>
  );
}