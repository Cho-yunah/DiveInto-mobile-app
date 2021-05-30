import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Color.PointBlue },
  header: {
    height: 230,
    backgroundColor: Color.PointBlue,
  },
  headerContainer: { paddingLeft: 18, paddingRight: 18 },
  headerText: {
    paddingTop: 30,
    fontSize: 24,
    color: Color.White,
  },
  searchContainer: {
    height: 44,
    alignItems: 'center',
    backgroundColor: Color.White,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
});
