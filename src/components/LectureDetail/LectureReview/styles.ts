import { StyleSheet } from 'react-native';

export const LectureReviewStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingVertical: 24,
    marginTop: 4,
    backgroundColor: '#FEFEFE',
  },
  topContainer: {
    flexDirection: 'row',
  },
  title: {
    marginRight: 10,
  },
  totalAvgRateContainer: {
    flexDirection: 'row',
  },
  totalAvgRateText: {
    marginLeft: 5,
    color: '#6A6D70',
  },
  orderBySelectorsContainer: {
    marginVertical: 8,
    flexDirection: 'row',
  },
  orderBySelectorBtn: {
    height: 23,
    width: 85,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#566b7e',
    marginRight: 8,
  },
  orderBySelectorBtnActive: {
    backgroundColor: '#50CAD2',
    height: 23,
    width: 85,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    marginRight: 8,
  },
  orderBySelectorText: {},
  seeMoreBtn: {
    position: 'absolute',
    right: 17,
    top: 24,
  },
  seeMoreBtnText: {
    color: '#207AB4',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export const ReviewListStyles = StyleSheet.create({
  ReviewListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avgRateIcon: {
    marginRight: 12,
  },
  avgRateText: {},
});

//        color={rate < i ? '#CCD7DF' : 'rgb(248,194,93)'}
