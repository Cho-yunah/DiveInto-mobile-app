import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  TextInput: {
    marginTop: 121,
    borderBottomWidth: 1,
    borderBottomColor: '#c1c2c3',
    paddingBottom: 8,
  },
  TextInputIconContainer: {
    position: 'absolute',
    top: 121,
    right: 19,
  },
  TextInputIcons: {},
  transitionPressable: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 336,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderColor: 'rgb(32, 122, 180)',
  },
  transitionText: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 99,
    textAlign: 'center',
  },
  underlineText: {
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default styles;
