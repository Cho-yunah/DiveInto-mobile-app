import { StyleSheet } from 'react-native';

export const LectureInfoStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingVertical: 24,
    backgroundColor: '#FEFEFE',
  },
  topInfo: {},
  lectureTitle: { fontSize: 18, color: '#202020' },
  lectureTagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  lectureTagInnerContainer: {
    flexDirection: 'row',
  },
  lectureTag: {
    marginRight: 4,
  },
  lecturePriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lecturePrice: { fontSize: 18, color: '#50CAD2', fontWeight: 'bold' },
  lecturePriceUnit: { fontSize: 18 },
  bottomInfo: {
    marginTop: 12,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCD7DF',
  },
  bottomInfoText: {
    color: '#6A6D70',
  },
});
