import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import CommonModal from '@components/common/CommonModal';
import { DetailInfoStyle as styles } from './styles';
import { requestDeleteCommunity } from '@components/CommunityPosting/requestPostCommunityImages';
import {
  checkWriterState,
  communityItemSelector,
  refreshQuestionState,
  refreshShareState,
  showModalState,
  writerInfoState,
} from '@recoil/CommunityStack';

export default function DetailInfo({ id }: {id: number}) {
  const navigation = useNavigation();
  const setRefreshShare= useSetRecoilState(refreshShareState)
  const setRefreshQuestion= useSetRecoilState(refreshQuestionState)
  const { title } = useRecoilValue(communityItemSelector);
  const [show, setShow] = useRecoilState(showModalState);
  const writer = useRecoilValue(writerInfoState);
  const checkWriter = useRecoilValue(checkWriterState)
  // console.log(checkWriter)
  
  const basicProfilelUrl =
    'https://img.freepik.com/free-vector/swimmer-dives-into-water-from-splash-watercolors-illustration-paints_291138-350.jpg?size=626&ext=jpg';

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

  return (
    <View>
      <View style={styles.writerInfoBox}>
        {writer.profileImageUrl ? (
          <Image
            style={styles.writerImage}
            source={{ uri: writer.profileImageUrl }}
          />
        ) : (
          <Image
            style={styles.writerImage}
            source={{ uri: basicProfilelUrl }}
          />
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
