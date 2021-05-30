import { StyleSheet, Dimensions } from 'react-native';
import * as Color from '@/src/config/colors';

export const inputStyles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginTop: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#ccd7df',
    paddingBottom: 9,
    flexDirection: 'row',
  },
  commonText: {
    flex: 1,
    fontSize: 16,
    color: '#6a6d70',
  },
  button: { alignItems: 'flex-end' },
  buttonText: { color: Color.deepBlue, fontSize: 14 },
});

export const genderBtnStyles = StyleSheet.create({
  genderTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 80,
    width: '100%',
  },
  genderBtn: {
    borderBottomWidth: 2,
    paddingBottom: 9,
    width: '50%',
    borderBottomColor: '#ccd7df',
  },
  genderBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ccd7df',
  },
  active: {
    borderBottomColor: '#207AB4',
  },
  activeText: {
    color: '#207AB4',
  },
});

export const datePickerStyles = StyleSheet.create({
  dateInputContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccd7df',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 80,
  },
  dateText: {
    paddingBottom: 9,
    fontSize: 16,
    color: '#ccd7df',
  },
  activeDateText: {
    color: '#6a6d70',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  datePickerLayout: {
    paddingBottom: 30,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#D1D6DC',
  },
  modalHeaderContainer: {
    backgroundColor: '#F8F8F8',
    borderTopColor: '#D3D3D3',
    borderTopWidth: 1,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
  modalHeaderText: {
    textAlign: 'right',
    padding: 10,
    fontSize: 16,
    color: Color.deepBlue,
    fontWeight: '600',
  },
  datePickerStyle: { width: Dimensions.get('window').width * 1.2 },
});
