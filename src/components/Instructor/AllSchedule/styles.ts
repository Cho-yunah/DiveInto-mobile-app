import { StyleSheet } from 'react-native';

export const SelectLectureSchedule = StyleSheet.create({
  container: {
    minHeight: 180,
    backgroundColor: '#fefefe',
    marginTop: 4,
    paddingHorizontal: 17,
    paddingVertical: 26,
    color: '#6A6D70',
  },
  date: { fontSize: 16 },
  classGuideText: { fontSize: 15, marginBottom: 10 },
  dateWrapper: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#A9BBC9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  schedulesOuterWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  schedulesWrapper: {},
  schedule: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#A9BBC9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginBottom: 5,
  },
});