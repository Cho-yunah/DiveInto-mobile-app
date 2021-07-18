import { StyleSheet, Dimensions } from 'react-native';
import * as Color from '@/src/config/colors';

// 강사 소개글 관련 스타일
export const inputStyle = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: Color.White,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  topBlank: {
    marginTop: 50,
  },
  inputText: {
    fontSize: 16,
    lineHeight: 25,
    paddingBottom: 3,
    color: Color.BlackText,
  },
});

// 자격 단체 선택 스타일
export const selectbox = StyleSheet.create({
  selectContainer: {
    marginTop: 30,
    width: 353,
    height: 40,
  },
  shadowContainer: {
    marginTop: 30,
    width: 353,
    height: 40,
    shadowOffset: { width: 2, height: -2 },
    shadowColor: '#566B7E33',
    shadowOpacity: 0.5,
  },
  itemStyle: {
    justifyContent: 'flex-start',
  },
  pickerStyle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 0,
  },
  dropDown: {
    borderTopWidth: 1,
    borderWidth: 0,
    borderTopColor: '#A9BBC9',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#566B7E33',
    shadowOpacity: 0.5,
  },
  labelStyle: {
    fontSize: 15,
    textAlign: 'left',
    color: '#6A6D70',
  },
});

// 강사 자격증 선택 관련 스타일
export const UploadCertificate = StyleSheet.create({
  container: {
    height: 76,
    marginTop: 40,
    padding: 8,
    borderRadius: 8,
    backgroundColor: Color.White,
  },
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
});
