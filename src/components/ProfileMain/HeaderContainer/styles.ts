import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';

export const mainHeaderStyles = StyleSheet.create({
  rootContainer: {
    height: 180,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#A9BBC9',
    borderRadius: 50,
    marginBottom: 8,
  },
  changeImageButton: {
    color: Color.deepBlue,
    fontSize: 16,
    fontWeight: '500',
  },
});

export const lecturerHeaderStyles = StyleSheet.create({
  rootContainer: {
    height: 130,
    marginTop: 40,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
