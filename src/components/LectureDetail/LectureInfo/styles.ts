import { StyleSheet } from 'react-native';
import styles from '../../Login/styles';

export const LectureInfoStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingVertical: 24,
    backgroundColor: '#FEFEFE',
  },
  topInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 21,
  },
  lectureTitle: { fontSize: 18, lineHeight: 21, color: '#202020' },
  lectureTagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  lectureTag: {
    marginRight: 4,
  },
  lecturePriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
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
