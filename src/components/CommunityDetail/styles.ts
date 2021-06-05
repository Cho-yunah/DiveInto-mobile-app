import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
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
  CommentInputBox: {
    position: 'absolute',
    flexDirection: 'row',
    width: '90%',
    padding: 15,
    height: 46,
    bottom: 20,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "#566B7E33",
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  arrowIcon: {
    position: 'absolute',
    bottom: 50,
    right: 25,
    color: '#D8D8D8'
  }
})
