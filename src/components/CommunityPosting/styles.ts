import {StyleSheet} from 'react-native'

export const SelectStyle = StyleSheet.create({
  selectContainer: {
    marginTop: 30 ,
    width: 353,
    height: 40,
  },
  shadowContainer: {
    marginTop: 30 ,
    width: 353,
    height: 40,
    shadowOffset:{width: 2, height: -2},
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
    shadowOffset:{width: 2, height: 2},
    shadowColor: '#566B7E33',
    shadowOpacity: 0.5,
  },
  labelStyle: { 
    fontSize: 15,
    textAlign: 'left', 
    color: '#6A6D70' ,
  },
})

export const styles = StyleSheet.create({
  container: {
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
