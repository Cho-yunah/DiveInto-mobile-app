import { StyleSheet } from 'react-native';

export const InstructorProfileStyles = StyleSheet.create({
  container: {
    marginTop: 4,
    backgroundColor: '#FEFEFE',
    paddingTop: 24,
    paddingBottom: 21,
    paddingLeft: 16,
    paddingRight: 16,
  },
  instructorInfoTitle: {
    color: '#202020',
  },
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
  },
  instructorInfoContainer: {
    marginTop: 10,
    marginLeft: 8,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCD7DF',
  },
  nickname: {
    color: '#6A6D70',
    marginBottom: 2,
  },
  instructorBrief: {
    color: '#6A6D70',
  },
});
