import { Modal, Pressable, ScrollView, View } from 'react-native';
import { LoginWithEmailProps } from '@navigators/LoginStack/types';
import { PwForgot, LoginButton, PWInput } from '@components/LoginWithEmail';
import styles from './styles';
import instance, { getInstanceATK } from '@/src/lib/api/axios';
import { LoginButtonProps } from '@/src/components/LoginWithEmail/types';

import { useSetRecoilState } from 'recoil';
import { IsLogin, IsInstructor } from '@/src/recoil/Global';

import jwt_decode from 'jwt-decode';
import { JWToken } from './types';
import React, { useState } from 'react';
import { ModalContainer } from '../ReserveLecture';
import AsyncStorage from '@react-native-community/async-storage';
// import { getToken } from '@/src/lib/firebase/FCM';
import * as FCM from '@lib/firebase/FCM';
import { ImageArrStateType } from '@/src/recoil/CommunityStack';
import { getFormData } from '@/src/lib/utils/requestPostReview';

const LoginWithEmailScreen = ({ navigation }: LoginWithEmailProps) => {
  const setIsLogin = useSetRecoilState(IsLogin);
  const setIsInstructor = useSetRecoilState(IsInstructor);
  const [isError, setIsError] = useState<boolean>(false);

  const requestLogin: LoginButtonProps['requestLogin'] = async (
    email,
    password,
    setIsLoading,
  ) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const login = await instance.post('/sign/login', {
        email,
        password,
      });
      if (login?.data?.access_token) {
        const atk = login.data.access_token;
        const decoded: JWToken = jwt_decode(atk);
        await AsyncStorage.setItem('atk', atk);
        const fcmToken = await FCM.getToken();

        console.log('fcm Token : ', fcmToken);

        if (decoded.authorities.includes('ROLE_INSTRUCTOR')) {
          setIsInstructor(true);
          await AsyncStorage.setItem('instructor', 'instructor');
        } else {
          await AsyncStorage.setItem('instructor', 'student');
        }

        await requestFireBase(fcmToken);
        setIsLogin(true);
      }
    } catch (e) {
      console.log(e.response.data);
      setIsError(true);
    }
    setIsLoading(false);
  };

  const requestFireBase = async (fcmToken: string) => {
    try {
      const instanceATK = await getInstanceATK();
      const body = { token: fcmToken };
      const { data } = await instanceATK.post('/sign/firebase-token', body);
      console.log(data);
    } catch (e) {
      console.log(e);
      throw Error(e);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <PWInput />
        <LoginButton requestLogin={requestLogin} />
        <PwForgot />
      </ScrollView>
      <Modal visible={isError} transparent={true} animationType={'fade'}>
        <Pressable
          onPress={() => setIsError(false)}
          style={styles.modalOuterContainer}
        >
          <ModalContainer message={'이메일 혹은 비밀번호가 잘못되었습니다.'} />
        </Pressable>
      </Modal>
    </View>
  );
};
export default LoginWithEmailScreen;

// type PostingBodyType = {
//   [key: string]: string;
// };
// type RequestPostCommunityType = {
//   (body: FormData, postingId: number): Promise<undefined>;
//   (body: PostingBodyType): Promise<number>;
// };

// export const requestPostCommunity: RequestPostCommunityType = async (
//   body: FormData | PostingBodyType,
//   postingId?: number,
// ) => {
//   const instanceAtk = await getInstanceATK();

//   try {
//     if (body instanceof FormData) {
//       // 이미지 전송시
//       const { data } = await instanceAtk.post(
//         `/community/post${postingId}/post-image`,
//         body,
//       );
//       console.log(data);
//     } else {
//       // 게시글 전송시
//       const { data } = await instanceAtk.post('/community/post', body);
//       console.log(data);

//       return data.postResource.id;
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

// // 개시글 요청 할 경우
// const body = postingInfo
// const postingId = await reqeustPostCommunity(body)
// typeof postingId === 'number' && setPostImageId(postingId)

// // 게시글 요청을 완료 하고 나서 사진 요청하는경우
// if (typeof postingId === 'number' && imagesArr.length) {
//   const imagesRes = await requestPostCommunity(getFormData(imagesArr), postingId)
// }
