import { StyleSheet } from 'react-native';
import * as colors from '@config/colors';

export { shadow } from '../styles';
export const NewLectures = StyleSheet.create({
  rootContainer: { marginTop: 40, flex: 1, marginLeft: 18, marginRight: 18 },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: { fontSize: 18, fontWeight: '600', flex: 1 },
  more: {
    color: colors.deepBlue,
    fontSize: 14,
    fontWeight: '600',
  },

  lectureContainer: {
    marginRight: 10,
    width: 196,
    backgroundColor: colors.White,
    borderRadius: 20,
    marginBottom: 6,
  },
  lectureImage: {
    width: '100%',
    height: 120,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  heart: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 8,
  },
  infoContainer: { flex: 1, padding: 12 },
  tagContainer: { flexDirection: 'row', marginBottom: 8 },
});
export const PopularLectures = StyleSheet.create({
  container: { marginTop: 40, flex: 1, marginLeft: 18, marginRight: 18 },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: '600', flex: 1, marginBottom: 8 },
  more: {
    color: colors.deepBlue,
    fontSize: 14,
    fontWeight: '600',
  },

  lectureContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 125,
    backgroundColor: colors.White,
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '45%',
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    resizeMode: 'stretch',
  },
  infoContainer: { padding: 12, flexDirection: 'row', flex: 1 },
  tagContainer: { flexDirection: 'row', marginBottom: 8 },
  heart: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export const InfoTags = StyleSheet.create({
  titleText: { fontSize: 13, marginBottom: -3 },
  subText: { fontSize: 10 },
});

export const Tags = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  tagListContainer: { flexDirection: 'row' },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    color: colors.DarkgrayText,
    fontSize: 10,
  },
  separate: {
    marginLeft: 2,
    marginRight: 2,
  },
  icon: { marginRight: 4 },
});
