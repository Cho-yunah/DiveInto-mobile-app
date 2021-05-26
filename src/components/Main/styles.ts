import { StyleSheet } from 'react-native';
import * as colors from '@config/colors';

export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

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
