import { StyleSheet } from 'react-native';
import * as getDimension from '@config/windowDimention';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: getDimension.HEIGHT / 7.5,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccd7df',
    marginBottom: 8,
  },
  passwordInput: {
    padding: 0,
    paddingBottom: 8,
    fontSize: 16,
  },
  messageText: {
    marginBottom: getDimension.HEIGHT / 14,
  },
  valid: { color: '#38D1A8' },
  invalid: { color: '#E93A55' },
  btnText: {
    color: '#D8D8D8',
    fontSize: 14,
    paddingRight: 17,
  },
});

export default styles;
