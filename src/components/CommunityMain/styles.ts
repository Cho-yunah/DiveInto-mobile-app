import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tabContainer: {
    backgroundColor: "#fefefe",
    flexDirection: "row",
    justifyContent: "space-around",
    height:46,
    alignItems: "center",
  },
  tab: {
    paddingHorizontal: 66,
    paddingVertical: 13,
    borderColor: '#50CAD2', borderBottomWidth: 2, 
    
  }, 
  tabText: {
    color: '#6A6D70',
    fontWeight: 'bold',
    fontSize:  18,
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
  },
  contentInfo: {
    marginLeft: 10,
    height: 46,
    flexDirection: 'column',
    justifyContent: 'space-around' 
  },
  flexBox: {
    flexDirection: 'row',

  },
  iconBox: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 64,
    justifyContent: 'space-between',
  },
  commentAndLike: {
    width: 27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
