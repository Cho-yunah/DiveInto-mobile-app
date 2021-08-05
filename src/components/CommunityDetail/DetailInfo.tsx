import {
  communityItemSelector,
  communityListState,
  listPageState,
  showModalState,
  writerInfoState,
} from '@/src/recoil/CommunityStack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import CommonModal from '@components/common/CommonModal';
import { DetailInfoStyle as styles } from './styles';
import { requestDeleteCommunity } from '../CommunityPosting/requestPostCommunityImages';

export default function DetailInfo({ id }) {
  const navigation = useNavigation();
  const [communityList, setCommunityList] = useRecoilState(communityListState);
  const { title, dateOfRegistration } = useRecoilValue(communityItemSelector);
  const writer = useRecoilValue(writerInfoState);
  const [show, setShow] = useRecoilState(showModalState);
  
  const basicProfilelUrl =
    'https://img.freepik.com/free-vector/swimmer-dives-into-water-from-splash-watercolors-illustration-paints_291138-350.jpg?size=626&ext=jpg';

  // 삭제 확인 모달
  const toggleShowModal = (): void => {
    setShow(!show);
  };
  // 삭제 요청
  const requestDelete = async () => {
    // console.log('delete!')
    try {
      console.log(id)
      requestDeleteCommunity(id)
      setCommunityList(communityList.filter(item => item.id !== id));
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
        <EditBtn style={styles.modify} navigation={navigation} id={id} />
        <DeleteBtn style={styles.delete} toggleShowModal={toggleShowModal} />
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

const EditBtn = ({ navigation, id }: any) => {
  // console.log(id)
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CommunityPosting', { id })}
    >
      <Text>수정</Text>
    </TouchableOpacity>
  );
};

const DeleteBtn = ({ toggleShowModal }: any) => {
  return (
    <TouchableOpacity onPress={toggleShowModal}>
      <Text>삭제</Text>
    </TouchableOpacity>
  );
};
