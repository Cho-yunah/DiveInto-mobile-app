import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  whiteBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  purpleHeader: { height: 10, backgroundColor: '#7976DA' },
  container: { marginLeft: 20, marginRight: 20, marginTop: 40 },
  headerText: { color: '#4F4F4F', fontSize: 14 },
});

export const fileUploadStyle = StyleSheet.create({
  uploadButtonContainer: { flexDirection: 'row' },
  emptyUpload: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BDBDBD',
    borderStyle: 'dashed',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export const modalStyles = StyleSheet.create({
  modalTitle: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  modalSubTitle: {
    color: '#333',
    fontSize: 13,
    marginBottom: 16,
  },
  modalHint: {
    color: '#333',
    fontSize: 13,
    marginBottom: 8,
    textAlign: 'center',
  },

  modalWrapper: {
    paddingHorizontal: 16 * 2,
    paddingVertical: 20,
    width: Dimensions.get('window').width - 2 * 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 2,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
});

export const UploadProgress = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#E8E8F8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  iconButton: { paddingTop: 5, marginRight: 5 },
  fileName: { fontSize: 16, marginBottom: 4 },
  uploadSize: { fontSize: 14, marginBottom: 10 },
});
