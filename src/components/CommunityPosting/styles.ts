import {Dimensions, StyleSheet} from 'react-native'
import * as Color from '@config/colors';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

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
    color: Color.DarkgrayText ,
    borderWidth: 0,
  },
})

export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
    width: WIDTH-40, 
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 12, 
  },
  imageContainer: {
    width: WIDTH-40, 
    height: 76,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 30,
  },
  imageUploadBtn: {
    width: 60,
    height: 60,
    backgroundColor: Color.underLine,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  imageUploadText: {
    color: Color.Gray2,
  },
  imageUploadLimit: {
    color: Color.Gray2,
  },
  uploadedImagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 15,
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
})
