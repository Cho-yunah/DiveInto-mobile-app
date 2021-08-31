import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
    paddingHorizontal: 18,
  },
  titleContainer: {
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  titleNum: {
    fontSize: 20,
    fontWeight: '600',
    color: Color.BasicText,
  },
});
