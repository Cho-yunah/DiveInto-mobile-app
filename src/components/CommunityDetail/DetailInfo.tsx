import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DetailInfoStyle as styles } from './styles';
import {
  atkState,
  checkWriterState,
  communityItemSelector,
  writerInfoState,
  writerInfoType,
} from '@recoil/CommunityStack';
import jwt_decode from "jwt-decode";
import { decodeTokenType } from './types';
import { DeleteBtn, EditBtn } from './ButtonCollection';

export default function DetailInfo({ id }: {id: number}) {

  const { title } = useRecoilValue(communityItemSelector);
  const writer = useRecoilValue(writerInfoState);
  const token = useRecoilValue(atkState)
  const decodeToken=  jwt_decode<decodeTokenType>(token|| '') || null;
  const writerInfo= useRecoilValue<writerInfoType>(writerInfoState)
  const [checkWriter, setCheckWriter] = useRecoilState(checkWriterState)

  useEffect(()=> {
    // 로그인한 사람과 글 게시한 사람이 일치하는지
    decodeToken.user_name == writerInfo.id 
      ? setCheckWriter(true)
      : setCheckWriter(false)
  },[writerInfo.id ])

  return (
    <View>
      <View style={styles.writerInfoBox}>
        {writer.profileImageUrl ? (
          <Image
            style={styles.writerImage}
            source={{ uri: writer.profileImageUrl }}
          />
         ) : (
          <View style={styles.writerImage}>
          </View>
         )}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.dateStyle}>{writer.nickName}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        {checkWriter 
          ? <>
              <EditBtn id={id} />
              <DeleteBtn id={id}/>
            </>
          : null
        }
      </View>
    </View>
  );
}

