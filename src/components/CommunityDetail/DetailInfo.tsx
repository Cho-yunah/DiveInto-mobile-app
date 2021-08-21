import React, { useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import CommonModal from '@components/common/CommonModal';
import { DetailInfoStyle as styles } from './styles';
import { requestDeleteCommunity } from '@components/CommunityPosting/requestPostCommunityImages';
import {
  atkState,
  checkWriterState,
  communityItemSelector,
  refreshQuestionState,
  refreshShareState,
  showModalState,
  writerInfoState,
  writerInfoType,
} from '@recoil/CommunityStack';
import jwt_decode from "jwt-decode";
import { decodeTokenType } from './types';

export default function DetailInfo({ id }: {id: number}) {
  const navigation = useNavigation();
  const setRefreshShare= useSetRecoilState(refreshShareState)
  const setRefreshQuestion= useSetRecoilState(refreshQuestionState)
  const { title } = useRecoilValue(communityItemSelector);
  const [show, setShow] = useRecoilState(showModalState);
  const writer = useRecoilValue(writerInfoState);
  // console.log(checkWriter)

  const token = useRecoilValue(atkState)
  const decodeToken=  jwt_decode<decodeTokenType>(token|| '') || null;
  const writerInfo= useRecoilValue<writerInfoType>(writerInfoState)
  const [checkWriter, setCheckWriter] = useRecoilState(checkWriterState)

  // 삭제 확인 모달
  const toggleShowModal = () => {
    setShow(!show);
  };

  // 삭제 요청
  const requestDelete = async () => {
    try {
      console.log(id)
      requestDeleteCommunity(id)
      setRefreshShare(true)
      setRefreshQuestion(true)
      navigation.navigate('CommunityMain');
      setShow(!show); //모달 닫기
    } catch (e) {
      console.log(e);
    }
  };

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
              <DeleteBtn toggleShowModal={toggleShowModal} />
            </>
          : null
        }
      </View>

      {/* 삭제버튼 눌렀을 경우 확인 모달 */}
      <CommonModal
        show={show}
        desc="게시글을 삭제하시겠습니까?"
        toggleShowModal={toggleShowModal}
        onClickConfirm={requestDelete}
      />
    </View>
  );
}

// 게시물 수정
const EditBtn = ({ id } : {id: number}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CommunityPosting', { id })}
    >
      <Text style={styles.modify}>수정</Text>
    </TouchableOpacity>
  );
};

// 게시물 삭제
const DeleteBtn = ({toggleShowModal}: {toggleShowModal: ()=> void}) => {

  return (
    <TouchableOpacity onPress={toggleShowModal}>
      <Text style={styles.delete}> 삭제 </Text>
    </TouchableOpacity>
  );
};
