import { Background } from './../../config/colors';
import {StyleSheet} from 'react-native'

export const DetailInfoStyle = StyleSheet.create({
  writerInfoBox: {
    flexDirection:'row',
    alignItems : 'center',
    paddingHorizontal: 17,
    paddingVertical: 13,
    position: 'relative',
    backgroundColor: '#fefefe',
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
    lineHeight: 21
  },
  dateStyle: {
    fontSize: 12,
    lineHeight: 20.4,
    color: '#6A6D70'
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    right: 17,
    top: 38,
    width: 60,
    justifyContent: 'space-between',
  },
  modify: {
    color: '#A9BBC9'
  },
  delete: {
    color: '#E93A55'
  }
})

export const ContentsStyle = StyleSheet.create({
  contentsContainer : {
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: '#CCD7DF',
    backgroundColor: '#fefefe',
    marginBottom: 5
  },
  textStyle: {
    lineHeight: 25,
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
    marginRight: 15
  },
})

export const CommentInputStyle = StyleSheet.create({
  CommentInputBox: {
    width: 353,
    height: 46,
    paddingRight: 38,
    paddingLeft: 15, 
    paddingTop: 10,
    marginTop: 8,
    marginBottom: 30,
    marginHorizontal: 20,
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
    // flex:1,
    // alignItems: 'center',
  },
  arrowIcon: {
    position: 'absolute',
    bottom: 41,
    right: 25,
    fontSize:24,
    color: '#D8D8D8'
  },
  activeArrowIcon: {
    position: 'absolute',
    bottom: 41,
    right: 25,
    fontSize:24,
    color: '#207AB4'
  },
})

export const CommentDetailStyles = StyleSheet.create({
  commentBox: {
    width: 353,
    height: 69,
    marginVertical: 12,
    marginHorizontal: 17,
    paddingVertical:10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#202020'
  },
  commentWriterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 16,
    height: 16,
    borderRadius: 50,
    borderWidth: 0,
    backgroundColor: 'pink',
    marginRight: 5
  },
  nicknameStyle: {
    fontSize: 12,
    lineHeight: 20,
    width: 260
  },
  dateStyle: {
    position: 'absolute',
    top: 11,
    right: 15,
    fontSize: 12,
    lineHeight: 20.4,
    color: '#6A6D70',
    width: 35
  },
  comment: {
    marginTop: 10,
    lineHeight: 14
  }
})
