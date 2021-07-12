import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  orderBySelectorsContainer: {
    marginVertical: 8,
    flexDirection: 'row',
  },
  orderBySelectorBtn: {
    height: 25,
    width: 85,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,

    elevation: 5,
  },
  orderBySelectorBtnActive: {
    backgroundColor: '#50CAD2',
    height: 25,
    width: 85,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: 'center',
    marginRight: 8,
  },
});
