import { StyleSheet } from 'react-native';

export const ReserveBtn = StyleSheet.create({
  headerBtnText: { color: '#F5DAAC', fontSize: 16 },
});

export const SelectStudentNumber = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 17,
    marginTop: 4,
  },
  title: {
    fontSize: 16,
  },
  bottomContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controller: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
    backgroundColor: '#F3F5F7',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  controllerBtnLeft: {
    marginRight: 8,
  },
  controllerBtnRight: {
    marginLeft: 8,
  },
  controllerBtnText: {
    color: '#207AB4',
    fontSize: 22,
  },
});

export const SelectLectureSchedule = StyleSheet.create({
  container: {
    minHeight: 180,
    backgroundColor: '#fefefe',
    marginTop: 4,
    paddingHorizontal: 17,
    paddingVertical: 26,
    color: '#6A6D70',
  },
  date: { fontSize: 16 },
  classGuideText: { fontSize: 15, marginBottom: 10 },
  dateWrapper: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#A9BBC9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  schedulesOuterWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  schedulesWrapper: {},
  schedule: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#A9BBC9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginBottom: 5,
  },
});

export const RentEquipments = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    minHeight: 140,
    marginTop: 4,
    paddingTop: 24,
    paddingBottom: 40,
    paddingHorizontal: 17,
  },
  titleText: {
    fontSize: 16,
  },
  eachEquipmentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  itemContainer: {
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#F3F5F7',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    backgroundColor: '#50CAD2',
    borderRadius: 10,
  },
  itemNameText: {
    borderTopRightRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#fefefe',
  },
  selectSizeText: {
    paddingVertical: 8,
    paddingHorizontal: 26,
    fontSize: 15,
    color: '#50CAD2',
  },
  sizeItemOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeItemContainer: {
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#F3F5F7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sizeControllerContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 20,
    width: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    minHeight: 130,
    paddingVertical: 20,
    paddingHorizontal: 17,
    backgroundColor: '#50CAD2',
    position: 'absolute',
    bottom: 0,
  },
  modalScrollView: {},
  modalInnerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  modalSelectSize: {
    color: '#fefefe',
    marginBottom: 8,
    fontSize: 15,
  },
  modalSizeView: {
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: '#fefefe',
  },
  modalSize: {
    color: '#50cad2',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 17,
    zIndex: 1,
  },
});
