import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Input-related style
  commonText: {
    marginTop: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#ccd7df',
    paddingBottom: 9,
    fontSize: 16,
    color: '#6a6d70',
  },

  // GenterBtn style
  genderTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 80,
    width: '100%',
  },
  eachGenderBtnContainer: {
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
  activeEachGenderBtnContainer: {
    borderBottomColor: '#207AB4',
  },
  activeGenderBtnText: {
    color: '#207AB4',
  },

  // CustomDatePicker style
  dateInputContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccd7df',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInputText: {
    marginTop: 80,
    paddingBottom: 9,
    fontSize: 16,
    color: '#ccd7df',
  },
  activeDateInputText: {
    color: '#6a6d70',
  },
  datePickerContainer: {
    flex: 1,
  },
  modalClose: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  datePickerBg: {
    backgroundColor: '#FFFFFF',
    height: '35%',
    overflow: 'hidden',
  },
  datePickerLayout: {
    marginTop: 17,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#D1D6DC',
    width: '100%',
  },
});

export default styles;
