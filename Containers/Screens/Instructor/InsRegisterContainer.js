import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  TextInput,
  Image,
  Button,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as RNFS from 'react-native-fs';

import ModalComponent from '../../../Components/common/ModalComponent';

export default function InsRegisterContainer() {
  const [country, setCountry] = useState('uk');

  const [phone, setPhone] = useState('');

  const associations = ['SSI', 'CMAS', 'AIDA', 'PADI'];
  const [association, setAssociation] = useState(associations[0]);

  const [images, setImages] = useState('');

  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        {/* 강사 번호 인증 */}
        <View style={styles.subContainer}>
          <Text style={{ fontSize: 20 }}>강사 번호 인증</Text>

          <View
            style={{
              flexDirection: 'row',
              height: 40,
              borderWidth: 1,
              borderColor: 'gray',
              padding: 8,
              margin: 5,
            }}
          >
            <TextInput
              style={{ width: '80%' }}
              value={phone}
              onChangeText={input => {
                // '-'  자동 추가
                if (input.length == 3 || input.length == 8) input = input + '-';
                setPhone(input);
                console.log('폰번호 : ', phone);
              }}
              placeholder="010-0000-1111"
              keyboardType="number-pad"
            />
            <View style={{ justifyContent: 'flex-end' }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  backgroundColor: '#ACC1FF',
                  padding: 3,
                  alignItems: 'center',
                }}
              >
                <Text>인증하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 프로필 사진 */}
        <View style={styles.subContainer}>
          <Text style={{ fontSize: 20 }}>프로필 사진</Text>
          <View
            style={{
              backgroundColor: '#e0e0e0',
              padding: 10,
              margin: 3,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: 'red', marginBottom: 10 }}>주의!</Text>
            <Text>
              얼굴이 나오지 않은 동물/캐릭터/단순배경사진/증명사진은 승인되지
              않습니다.
            </Text>
          </View>
        </View>

        {/* 소속 */}
        <View style={styles.subContainer}>
          <Text style={{ fontSize: 20 }}>소속</Text>

          <DropDownPicker
            items={[
              { label: associations[0], value: associations[0] },
              { label: associations[1], value: associations[1] },
              { label: associations[2], value: associations[2] },
              { label: associations[3], value: associations[3] },
            ]}
            defaultValue={association}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            labelStyle={{ color: 'blue' }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            activeItemStyle={{ backgroundColor: '#ACC1FF' }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={item => {
              setAssociation(item.value);
              console.log('선택된 아이템 : ', item.value);
            }}
          />
        </View>

        {/* 자격증 사본 */}
        <View style={styles.subContainer}>
          <Text style={{ fontSize: 20 }}>자격증 사본</Text>
          <View
            style={{
              backgroundColor: '#e0e0e0',
              padding: 10,
              margin: 3,
              borderRadius: 10,
            }}
          >
            {/* <Text style={{ color: 'red', marginBottom: 10 }}>주의!</Text> */}
            <Text>- 파일은 jpg, png, gif, bmp등 이미지 파일만 가능합니다.</Text>
            <Text>- 관리자 확인 후 업로드해주신 파일은 바로 삭제됩니다.</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 40,
              borderWidth: 1,
              borderColor: 'gray',
              padding: 8,
              margin: 5,
            }}
          >
            <TextInput
              style={{ width: '80%' }}
              value={phone}
              onChangeText={input => {
                // '-'  자동 추가
                if (input.length == 3 || input.length == 8) input = input + '-';
                setPhone(input);
                console.log('폰번호 : ', phone);
              }}
              placeholder="자격증명"
              keyboardType="number-pad"
            />
            <View style={{ justifyContent: 'flex-end' }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  backgroundColor: '#ACC1FF',
                  padding: 3,
                  alignItems: 'center',
                }}
                onPress={() =>
                  launchImageLibrary(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                      maxHeight: 200,
                      maxWidth: 200,
                    },
                    async response => {
                      console.log(
                        'hi',
                        response.type,
                        response.uri,
                        response.base64,
                      );
                      const result = await RNFS.readFile(
                        response.uri,
                        'base64',
                      );
                      setImages(result);
                      console.log('RNFS ', result);
                    },
                  )
                }
              >
                <Text>추가하기</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Image
            style={{ height: 50, width: 100, borderWidth: 1 }}
            uri={'data:image/jpeg;base64,' + images}
          />
        </View>
        <ModalComponent visible={visible} setVisible={setVisible} />
        <Button title="modal" onPress={() => setVisible(!visible)} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    padding: 3,
    borderWidth: 1,
    margin: 10,
  },
});
