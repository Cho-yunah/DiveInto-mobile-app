import {StyleSheet, Dimensions} from 'react-native'
import * as Color from '@config/colors';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

export const DetailInfoStyle = StyleSheet.create({
  writerInfoBox: {
    flexDirection:'row',
    alignItems : 'center',
    paddingHorizontal: 17,
    paddingVertical: 13,
    position: 'relative',
    backgroundColor: Color.White,
  },
  writerImage: {
    width: 36,
    height: 36,
    borderRadius: 50,
    borderWidth: 0,
    backgroundColor: 'pink',
    marginRight: 16
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 3,
  },
  dateStyle: {
    fontSize: 12,
    padding: 2,
    color: Color.DarkgrayText
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    right: 17,
    top: 38,
    width: 55,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modify: {
    color: '#A9BBC9',
    fontSize: 12
  },
  delete: {
    color: '#E93A55',
    fontSize: 12
  }
})

export const ContentsStyle = StyleSheet.create({
  contentsContainer : {
    justifyContent: 'center',
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: '#CCD7DF',
    backgroundColor: '#fefefe',
    marginBottom: 5,
  },
  textStyle: {
    marginHorizontal: 19,
    color: '#202020',
  },
  imageBox: {
    marginTop: 30
  },
  contentsImage: {
    width: 320,
    height: 240,
    backgroundColor: '#E3CCCC',
    marginRight: 15,
    borderWidth: 0.2,
    borderColor: '#6A6D70'
  },
})

export const CommentInputStyle = StyleSheet.create({
  keyboardAvoidingStyle: {
    position: 'absolute',
    left: 0, 
    right: 0, 
    bottom: 0, 
    backgroundColor: Color.Background
  },
  commentInputBox: {
    width: WIDTH-40,
    height: 46,
    paddingRight: 38,
    paddingLeft: 15, 
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 19,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "#566B7E33",
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 3,
    lineHeight: 20,
  },
  recommentInput: {
    width: '91%',
    height: 46,
    paddingRight: 38,
    paddingLeft: 15, 
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 19,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "#b2f2bb",
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 3,
    lineHeight: 20,
  },
  arrowIcon: {
    position: 'absolute',
    bottom: 35,
    right: 25,
    fontSize:24,
    color: '#D8D8D8',
    padding: 5
  },
  activeArrowIcon: {
    position: 'absolute',
    bottom: 35,
    right: 25,
    fontSize:24,
    color: '#207AB4',
    padding: 5
  },
  recommentArrowIcon: {
    position: 'absolute',
    bottom: 35,
    right: 25,
    fontSize:24,
    color: '#38d9a9',
    padding: 5
  },
  editButton: {
    color: '#207AB4',
    position: 'absolute',
    bottom: 45,
    right: 25,
  }
})

export const CommentDetailStyles = StyleSheet.create({
  flatlistContainer: {
    flexGrow: 1,
  },
  commentBox: {
    width: WIDTH-40,
    marginVertical: 6,
    marginHorizontal: '5%',
    paddingVertical:10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#202020',
  },
  commentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 16,
    height: 16,
    borderRadius: 50,
    borderWidth: 0,
    backgroundColor: 'pink',
    marginRight: 10
  },
  nicknameStyle: {
    fontSize: 12,
    lineHeight: 20,
    flexGrow: 1,
  },
  dateStyle: {
    fontSize: 12,
    lineHeight: 20,
    color: '#6A6D70',
  },
  comment: {
    marginTop: 10,
    // lineHeight: 14
  },
  showingRecomment: {
    // backgroundColor: 'skyblue',
    overflow: "hidden",
  },
  buttonBox: {
    paddingVertical:10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edintingBtnBox: {
    width: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export const RecommentDetailStyles = StyleSheet.create({
  recommentBox: {
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 6
  },

  writerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg:{
    width: 16,
    height: 16,
    borderRadius: 50,
    borderWidth: 0,
    backgroundColor: 'pink',
    marginRight: 7
  },
  nickname: {
    fontSize: 12,
    lineHeight: 20,
    flexGrow: 1
  },
  date: {
    fontSize: 12,
    color: '#6A6D70',
  }, 
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  recomment: {
   flexGrow: 1
  },
  deleteBtn: {
    color: '#E93A55', 
    fontSize: 12, 
    paddingHorizontal: 5 
  }
})
