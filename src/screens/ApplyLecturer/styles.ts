import { StyleSheet } from 'react-native';
import * as Color from '@/src/config/colors';

export const styles = StyleSheet.create({
  basicContainer: {
    flex: 1,
    paddingHorizontal: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const CERTInstructorStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Color.BlackText,
    lineHeight: 30,
  },
  desc: {
    lineHeight: 30,
    color: Color.BlackText,
  },
});
