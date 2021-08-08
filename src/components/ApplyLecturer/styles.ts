import { StyleSheet, Dimensions } from 'react-native';
import * as Color from '@/src/config/colors';

// 강사 소개글 관련 스타일
export const inputStyle = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: Color.White,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  // topBlank: {
  //   marginTop: 50,
  // },
  inputText: {
    fontSize: 16,
    lineHeight: 25,
    paddingBottom: 3,
    color: Color.BlackText,
  },
});

// 자격 단체 선택 스타일
export const selectbox = StyleSheet.create({
  container: {
    marginTop: 30,
    zIndex: 2,
  },
});

// 강사 자격증 선택 관련 스타일
export const UploadCertificate = StyleSheet.create({
  loadingContainer: {
    height: 76,
    marginTop: 50,
    padding: 8,
    borderRadius: 8,
    zIndex: 1,
  },

  container: {
    height: 76,
    marginTop: 12,
    padding: 8,
    borderRadius: 8,
    backgroundColor: Color.White,
    flexDirection: 'row',
  },

  // 사진 업로드 전 스타일
  uploadButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#D8D8D8',
    fontSize: 14,
    paddingLeft: 12,
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: '#CCD7DF',
    borderRadius: 8,
    color: '#F3F5F7',
    textAlign: 'center',
    lineHeight: 55,
  },

  // 사진 업로드 후 관련 이미지 보여주는 스타일
  picsArrButton: {
    marginRight: 10,
  },
  picsArrImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
});

export const containerShadowBox = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 3,
  },
});
