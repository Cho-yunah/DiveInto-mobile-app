import { StyleSheet } from 'react-native';

 const styles= StyleSheet.create({
  contentContainer: {
    marginTop: 70,
  },
  inputBox: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: '#c1c2c3',
  marginTop: 50,
  },
  passwordInput: {
    flex: 1,
    padding: 7,
    fontSize: 18,
  },
  // 비밀번호 유효에 따른 메세지 및 eye 아이콘 스타일
  validMessage: { marginTop: 8, color: '#50CAD2'},
  invalidMessage: { marginTop: 8, color: '#E93A55'},

  validPwIcon: {color: '#50CAD2'},
  visiblePw: {color: '#E0E0E1'},
  invisiblePw: {color: '#343434'},

  

  nextBtn: {
    position : 'absolute',
    top: -280,
    right: 10,
  },
  btnText: {
    color: '#D8D8D8',
    fontSize: 14,
    lineHeight: 20,
    paddingRight: 17,
  }

})

export default styles;