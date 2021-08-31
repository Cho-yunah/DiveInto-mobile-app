import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';
import * as getDimension from '@config/windowDimention';

export const EachReviewListStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: getDimension.WIDTH - 41,
    backgroundColor: Color.White,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.underLine,
    padding: 5,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  titleContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    paddingRight: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',

    paddingBottom: 2.5,
  },
  dateText: {
    color: Color.DarkgrayText,
  },
  startContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
  },
  imageContainer: {
    paddingBottom: 10,
  },
  contentsContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  contentsText: {
    fontSize: 15,
    color: Color.BasicText,
  },
});
