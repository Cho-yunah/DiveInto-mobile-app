import { StyleSheet, Dimensions } from 'react-native';
import * as Color from '@config/colors';
import * as getDimension from '@config/windowDimention';

export const inputStyles = StyleSheet.create({
  inputContainer: {
    // width: '100%',
    marginTop: getDimension.HEIGHT / 11,
    borderBottomWidth: 1,
    borderBottomColor: Color.underLine,
    paddingBottom: getDimension.HEIGHT > 600 ? 9 : 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commonText: {
    padding: 0,
    width: getDimension.WIDTH * 0.7,
    fontSize: 16,
    color: '#6a6d70',
  },
  button: {},
  buttonText: { color: Color.deepBlue, fontSize: 14 },
  notErrorText: {
    paddingTop: 8,
    color: Color.Selected,
    fontSize: 12,
    opacity: 0,
  },
  errorText: {
    opacity: 1,
  },
});

export const genderBtnStyles = StyleSheet.create({
  genderTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: getDimension.HEIGHT / 11,
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
    borderColor: Color.underLine,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getDimension.HEIGHT / 11,
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
