import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 18,
    paddingRight: 18,
  },
  inputBox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccd7df',
    marginBottom: 8,
  },
  passwordInput: {
    flex: 1,
    paddingBottom: 8,
    fontSize: 16,
  },
  messageText: { height: 15, marginBottom: 63.18 },
  valid: { color: '#38D1A8' },
  invalid: { color: '#E93A55' },
  btnText: {
    color: '#D8D8D8',
    fontSize: 14,
    paddingRight: 17,
  },
});

export default styles;
