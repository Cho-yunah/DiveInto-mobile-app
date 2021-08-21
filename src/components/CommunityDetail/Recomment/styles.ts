import {StyleSheet} from 'react-native'
import * as Color from '@config/colors';

export const styles = StyleSheet.create({
  keyboardAvoidingStyle: {
     position: 'relative',
  },
  recommentInput: {
    height: 35,
    paddingHorizontal: 10, 
    paddingVertical: 5,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 5,
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowColor: "#D8D8D8",
    // shadowOpacity: 0.8,
    // shadowRadius: 8,
    // elevation: 3,
  },
  arrowIcon: {
    position: 'absolute',
    bottom: 11,
    right: 5,
    fontSize:24,
    color: '#D8D8D8',
    padding: 5
  },
  activeArrowIcon: {
    position: 'absolute',
    bottom: 11,
    right: 5,
    fontSize:24,
    color: '#207AB4',
    padding: 5
  },
  recommentArrowIcon: {
    position: 'absolute',
    bottom: 35,
    right: 25,
    fontSize:24,
    color: '#38d9a9',
    padding: 5
  },
  editButton: {
    color: '#207AB4',
    position: 'absolute',
    bottom: 45,
    right: 25,
  }
})

