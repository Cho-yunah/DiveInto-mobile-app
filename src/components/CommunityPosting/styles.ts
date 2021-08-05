import {StyleSheet} from 'react-native'

export const SelectStyle = StyleSheet.create({
  selectContainer: {
    marginTop: 30 ,
    height: 40,
    borderWidth: 0
  },
  shadowContainer: {
    marginTop: 30 ,
    height: 40,
    shadowOffset:{width: 2, height: 2},
    shadowColor: '#566B7E33',
    shadowOpacity: 0.5,
    borderWidth: 0,
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
  },
  labelStyle: { 
    fontSize: 15,
    textAlign: 'left', 
    color: '#6A6D70' ,
    borderWidth: 0,
  },
})

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    width: 353,
    height: 76,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  imageUploadBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#CCD7DF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  imageUploadText: {
    color: '#D8D8D8',
  },
  imageUploadLimit: {
    color: '#D8D8D8',
  },
  uploadedImagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 38,
  },
  uploadedImgBtn: {},
  uploadedImg: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  removeIconFilter: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 30,
    width: 353,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 10, 
  },
  addImageBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageUploadBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#CCD7DF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  text: {
    color: '#D8D8D8',
    fontSize: 15,
    marginLeft: 12,
  }, 
  btnText: {
    color: '#fefefe',
    fontSize: 15,
    paddingRight: 17,
  },
})
