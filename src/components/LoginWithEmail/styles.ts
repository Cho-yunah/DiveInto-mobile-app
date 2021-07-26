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
    right: 0,
  },
  TextInputIcons: {},
  transitionPressable: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 336,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderColor: 'rgb(32, 122, 180)',
    height: 50,
  },
  transitionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  underlineText: {
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default styles;
