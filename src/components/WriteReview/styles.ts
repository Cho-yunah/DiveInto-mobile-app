import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  starComponentsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 32,
  },
  starComponentContainer: {
    backgroundColor: '#FEFEFE',
    width: 115,
    height: 32,
    borderRadius: 8,
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starText: {
    fontSize: 15,
    color: '#6A6D70',
    marginBottom: 3,
  },
  textInput: {
    height: 100,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingTop: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    fontSize: 16,
  },
  textInputContainer: {
    height: 120,
    marginBottom: 33,
  },
  textLengthView: {
    paddingBottom: 8,
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  textLength: {
    color: '#D8D8D8',
    textAlign: 'right',
    paddingRight: 12,
    height: 20,
  },
  photoContainer: {
    height: 76,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoUploadBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#CCD7DF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  photoUploadText: {
    color: '#D8D8D8',
  },
  photoUploadLimit: {
    color: '#D8D8D8',
  },
  uploadedPicsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 38,
  },
  uploadedPicBtn: {},
  uploadedPic: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  removeIconFilter: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
