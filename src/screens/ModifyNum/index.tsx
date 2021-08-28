import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';
import { getInstanceATK } from '@lib/api/axios';
import { ModifyNumProps } from '@navigators/ProfileStack/types';
import NextButton from '@components/common/NextButton';
import { useRecoilCallback } from 'recoil';
import { modifyNumViewStateAtom } from '@recoil/ProfileStack/store';

export default function ModifyNumScreen({ navigation }: ModifyNumProps) {
  const [nextPhoneNum, setNextPhoneNum] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const onChangeDone = useRecoilCallback(({ snapshot, set }) => async () => {
    const staticInfo = await snapshot.getPromise(modifyNumViewStateAtom);

    try {
      const body = {
        birth: staticInfo?.birth,
        gender: staticInfo?.gender,
        phoneNumber: nextPhoneNum,
      };

      const instanceAtk = await getInstanceATK();
      await instanceAtk.put('/account', body);
    } catch (err) {
      console.log(err);
    }

    navigation.navigate('ProfileMain');
  });

  const onChangeNum = (text: string) => {
    if (text.length > 14) return;

    setNextPhoneNum(text);
  };

  useEffect(() => {
    if (nextPhoneNum.length === 13) {
      setIsComplete(true);
    }
  }, [nextPhoneNum]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NextButton onPress={onChangeDone} text="완료" disable={isComplete} />
      ),
    });
  }, [isComplete]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="휴대폰 번호"
        value={autoHyphen(nextPhoneNum)}
        onChangeText={onChangeNum}
        maxLength={13}
      />
    </View>
  );
}

const autoHyphen = (phone: string) =>
  phone
    .replace(/(^\d{3})-(\d{4})(\d+)/g, '$1-$2-$3')
    .replace(/(^\d{3})(\d+)/g, '$1-$2');

// const onChangeDone = useCallback(() => {
//   const requestModifiyNumber = async () => {
//     try {
//       const body = {
//         birth: staticInfo?.birth,
//         gender: staticInfo?.gender,
//         phoneNumber: nextPhoneNum,
//       };

//       const instanceAtk = await getInstanceATK();
//       await instanceAtk.put('/account', body);
//     } catch (err) {
//       console.log(err);
//     }

//     navigation.navigate('ProfileMain');
//   };

//   requestModifiyNumber();
// }, [nextPhoneNum, staticInfo]);
