import { StyleSheet } from 'react-native';
import * as Color from '@/src/config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
    paddingHorizontal: 18,
    paddingVertical: 120,
  },
  inputStyle: {
    color: Color.placeholder,
    borderColor: '#CCD7DF',
    borderBottomWidth: 1,
    paddingBottom: 9,
    fontSize: 16,
  },
});
