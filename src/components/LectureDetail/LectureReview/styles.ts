import { StyleSheet } from 'react-native';

export const LectureReviewStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingVertical: 24,
    marginTop: 4,
    backgroundColor: '#FEFEFE',
    paddingBottom: 90,
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
    marginBottom: 8,
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
  personalReviewContainer: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    borderColor: '#A9BBC9',
    marginBottom: 12,
    marginTop: 5,
  },
  starsContainer: {},
  upDownBtn: {},
  upDownIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  avgRateText: {
    color: '#6A6D70',
    marginBottom: 1,
    marginRight: 4,
  },
  contentContainer: {
    marginTop: 5,
  },
  contentText: {
    color: '#535557',
  },
  openStarsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 260,
  },
  openStarText: {
    marginBottom: 4,
    color: '#6A6D70',
  },
  openStars: {
    flexDirection: 'row',
  },
  closeStars: {
    flexDirection: 'row',
  },
  starsOpen: {
    flexDirection: 'row',
  },
  reserveBtnContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 81,
    flex: 2,
    backgroundColor: '#FEFEFE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 17,
    borderColor: '#CCD7DF',
    borderTopWidth: 1,
  },
  reserveBtn: {
    borderRadius: 10,
    backgroundColor: '#50CAD2',
    width: '100%',
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reserveBtnText: {
    color: '#FEFEFE',
    fontSize: 16,
    fontWeight: 'bold',
  },
});