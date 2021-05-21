import { StyleSheet } from 'react-native';

 const styles= StyleSheet.create({
  topBox: {
    height: 40,
    backgroundColor: '#50CAD2'
  },
  headerContainer: {
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#50CAD2',
    position: 'relative'
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#fef',
    lineHeight: 24,
    fontWeight: 'bold'
  }, 
  contentContainer: {
    marginTop: 68,
    justifyContent: 'center'
  },
  inputBox: {
    flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: '#ccd7df',
  width: 338,
  marginHorizontal: 'auto',
  marginVertical: 32,
 position: 'relative'
  },
  passwordInput: {
    flex: 1,
    padding: 7,
    fontSize: 18,
  },
  invalidMessage: {
    position: 'absolute',
    top: 75,
    left: 25,
  //   color: ${(props:InvalidMessage) => props.isValid? '#50CAD2' : '#E93A55'};
  // border-color: ${(props) => props? '#50CAD2' : '#E93A55'};
  },
  matchMessage: {
    position: 'absolute',
  top: 175,
  left: 25,
  // color: ${(props:MatchMessage) => props.isMatch? '#50CAD2' : '#E93A55'};
  // border-color: ${(props:MatchMessage) => props.isMatch? '#50CAD2' : '#E93A55'};
  },
  nextBtn: {
    position : 'absolute',
    top: 53,
    right: 10,
  },
  btnText: {
    color: '#D8D8D8',
    fontSize: 14,
    lineHeight: 20,
    paddingRight: 17,
  }

})

export default styles;

type InvalidMessage = {
  isValid: boolean
}
type MatchMessage = {
  isMatch: boolean
}
