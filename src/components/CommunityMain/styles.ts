import {StyleSheet} from 'react-native'
import { getAutomaticTypeDirectiveNames } from 'typescript'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tabContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    height:46,
    alignItems: "center",
  },
  tab: {
    color: '#6A6D70',
    fontWeight: 'bold',
    fontSize:  18,
    lineHeight: 24,
    paddingVertical: 10,
    paddingHorizontal: 66,
  }, 
  listItem: {
    flexDirection: 'row',
    marginTop: 12,
    width:370,
    height: 70,
    backgroundColor: '#FEFEFE',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    position: 'relative',
  },
  thumnailImage: {
    width: 46, 
    height: 46,
    borderRadius: 10,
    backgroundColor: '#DE8C8C'
  },
  contentInfo: {
    marginLeft: 10,
    height: 46,
    flexDirection: 'column',
    justifyContent: 'space-around' 
  },
  iconBox: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 64,
    justifyContent: 'space-between'
  },
  commentAndLike: {
    width: 27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnText: {
    color: '#fefefe',
    fontSize: 15,
    paddingRight: 17,
  },
})
