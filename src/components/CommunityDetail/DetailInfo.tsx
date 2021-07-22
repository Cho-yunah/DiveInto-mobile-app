 import instance from '@/src/lib/api/axios'
import { atkState, communityItemSelector, communityListState, showModalState, writerInfoState } from '@/src/recoil/CommunityStack'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, Image, Text, TouchableOpacity } from 'react-native'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import CommonModal from '@components/common/CommonModal';
import {DetailInfoStyle as styles} from './styles'

export default function DetailInfo({id}) {
  const navigation = useNavigation()
  const token = useRecoilValue(atkState)
  const [communityList, setCommunityList]= useRecoilState(communityListState)
  const {title, dateOfRegistration } = useRecoilValue(communityItemSelector)
  const writer = useRecoilValue(writerInfoState)
  const [show, setShow] = useRecoilState(showModalState)

  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  }

  const toggleShowModal = (): void => {
    setShow(!show);
  };

  const requestDelete = async() => {
    // console.log('delete!')
    // console.log(id)
    try {
      const response = await instance.delete(`community/post/${id}`, config )
      // console.log(response)
      setCommunityList(communityList.filter(item => item.id !== id))
      navigation.navigate('CommunityMain')
    } catch(e) {
      console.log(e)
    }
  }
    
  return (
    <View >
      <View style={styles.writerInfoBox}>
        {writer.profileImageUrl? (
          <Image style={styles.writerImage} source={{uri: writer.profileImageUrl}}/>
          ):(
          <Image style={styles.writerImage} source={{uri:'./src/assets/logo2.png'}}/>
        )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style= {styles.dateStyle}>{writer.nickName}</Text>
       </View>
      </View>
      <View style= {styles.buttons}>
          <EditBtn style={styles.modify} navigation={navigation} id={id} />
          <DeleteBtn style={styles.delete} toggleShowModal={toggleShowModal}/>
      </View>

      {/* 삭제버튼 눌렀을 경우 확인 모달 */}
      <CommonModal
        show={show}
        desc="게시글을 삭제하시겠습니까?"
        toggleShowModal={toggleShowModal}
        onClickConfirm={requestDelete}
      />
    </View>
  )
}

const EditBtn=({navigation, id}: any) => {
  // console.log(id)
  return (
    <TouchableOpacity  onPress={()=> navigation.navigate('CommunityPosting', {id})} >
      <Text >수정</Text>
    </TouchableOpacity>
  )
}

const DeleteBtn= ({toggleShowModal}:any) => {
  return (
    <TouchableOpacity onPress={toggleShowModal}>
      <Text>삭제</Text>
    </TouchableOpacity>
  )
}