import { StyleSheet } from 'react-native';
import * as colors from '@config/colors';

export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 5,
    height: 5,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,

  elevation: 5,
};

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
});

export const HeaderStyles = StyleSheet.create({
  rootContainer: {
    height: 190,
    backgroundColor: colors.PointBlue,
    paddingLeft: 18,
    paddingRight: 18,
  },
  headerContainer: { flexDirection: 'row', paddingTop: 30 },
  headerText: {
    fontSize: 24,
    color: colors.White,
    flex: 1,
  },
  bell: { padding: 5 },
  searchBarContainer: { flexDirection: 'row', marginTop: 20 },
  searchBar: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: 10,
    flexDirection: 'row',
    marginRight: 12,
  },
  searchBarText: { marginLeft: 16, fontSize: 14, flex: 1 },
  searchButton: { marginRight: 16, marginLeft: 16 },
  filterButton: {
    borderRadius: 10,
    backgroundColor: colors.deepBlue,
    justifyContent: 'center',
    padding: 5,
  },
  filterText: { color: colors.White, fontSize: 14 },
});

export const NewLectures = StyleSheet.create({
  rootContainer: { marginTop: 40, flex: 1, marginLeft: 18, marginRight: 18 },
  titleContainer: {
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
    height: 200,
    backgroundColor: colors.White,
    borderRadius: 20,
    marginBottom: 6,
  },
  lectureImage: { width: '100%', height: 120 },
  heart: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 8,
  },
  infoContainer: { height: 80, padding: 12 },
  infoTitleContainer: { flexDirection: 'row' },
  infoTitleText: { fontSize: 14 },
  tagContainer: { flexDirection: 'row', marginTop: 8 },
});

export const Tags = StyleSheet.create({
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
