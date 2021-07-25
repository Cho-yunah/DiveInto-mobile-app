import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';

export const commonModal = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  modalContentsContainer: {
    width: 339,
    height: 105,
    justifyContent: 'space-between',
    backgroundColor: Color.PointBlue,
    marginHorizontal: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 4,
  },
  contentsText: {
    color: Color.White,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonLayout: {
    padding: 15,
  },
  cancelButtonText: {
    color: Color.UnSelected,
    fontSize: 14,
  },
  confirmButtonText: {
    color: '#F5DAAC',
    fontSize: 14,
  },
});

export const outputMode = StyleSheet.create({
  modalContentsContainer: {
    backgroundColor: Color.UnSelected,
  },
  contentsText: {
    color: Color.DarkgrayText,
  },
  cancelButtonText: {
    color: Color.DarkgrayText,
  },
  confirmButtonText: {
    color: Color.Selected,
  },
});
