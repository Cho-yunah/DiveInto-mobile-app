import { StyleSheet, Dimensions, FlatList } from 'react-native';
import * as Color from '@config/colors';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tabContainer: {
    backgroundColor: Color.White,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 46,
    alignItems: 'center',
  },
  tab: {
    borderColor: Color.PointBlue,
    borderBottomWidth: 2,
  },
  tabText: {
    color: Color.DarkgrayText,
    fontWeight: 'bold',
    fontSize: 18,
  },
  listItem: {
    flexDirection: 'row',
    marginTop: 12,
    width: WIDTH - 34,
    height: 70,
    backgroundColor: Color.White,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    position: 'relative',
  },
  thumnailImage: {
    width: 46,
    height: 46,
    borderRadius: 10,
    backgroundColor: Color.placeholder,
  },
  contentInfo: {
    marginLeft: 10,
    height: 46,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    width: WIDTH - 120,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  iconBox: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 64,
    justifyContent: 'space-between',
  },
  commentAndLike: {
    width: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loaderStyle: {
    marginVertical: 16,
  },
  btnText: {
    color: Color.placeholder,
    fontSize: 14,
    paddingRight: 17,
    paddingVertical: 5,
  },
  ActivationButtonText: {
    color: '#F5DAAC',
  },
  likeBtn: {
    marginRight: 12,
    flexDirection: 'row',
  },
});
