import {StyleSheet} from 'react-native'

export const DetailInfoStyle = StyleSheet.create({
  writerInfoBox: {
    flexDirection:'row',
    alignItems : 'center',
    paddingHorizontal: 17,
    paddingVertical: 13,
    position: 'relative',
    backgroundColor: '#fefefe'
  },
  writerImage: {
    width: 36,
    height: 36,
    borderRadius: 50,
    borderWidth: 0,
    backgroundColor: 'pink',
    marginRight: 16
  },
  nicknameStyle: {
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
    paddingVertical: 33,
    borderWidth: 1,
    borderColor: '#CCD7DF',
    backgroundColor: '#fefefe'
  },
  textStyle: {
    lineHeight: 25,
    marginHorizontal: 19,
  },
  imageBox: {
    marginTop: 32
  },
  contentsImage: {
    width: 320,
    height: 240,
    backgroundColor: '#E3CCCC',
    marginRight: 15
  },
})

export const CommnetInputStyle = StyleSheet.create({
  Container: {
    // position: 'relative',
    backgroundColor: 'tomato',
  },
  CommentInputBox: {
    flex: 1,
    width: 353,
    height: 46,
    padding: 15,
    textAlignVertical: 'center',
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "#566B7E33",
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6
  },
  arrowIcon: {
    // position: 'absolute',
    // top: 10,
    // right: 25,
    fontSize:24,
    color: '#D8D8D8'
  }
})

export const CommentDetailStyles = StyleSheet.create({
  CommentBox: {
    width: 100,
    height: 50,
    backgroundColor: 'pink'

  }
})
