import { StyleSheet, Platform } from 'react-native';
import { PointBlue, deepBlue } from '@config/colors';
export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#5DCACB',
  },
  textInputContainer: {
    flex: 1,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  buttonAdd: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#00bbf9',
  },
  buttonDelete: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#ff5d8f',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  equipContainer: {
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#00bbf9', // 'white', //'#00bbf9'
    marginBottom: 10,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black', // "#020A96",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
