import { StyleSheet } from 'react-native';

export const aboutReservationDetail = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 17,
    backgroundColor: '#fefefe',
    marginBottom: 6,
  },
  lectureTitle: {
    color: '#202020',
    fontSize: 18,
  },
  organizationLevelContainer: {
    marginBottom: 12,
    flexDirection: 'row',
  },
  organizationText: {
    marginRight: 8,
    color: '#6A6D70',
  },
  scheduleInfoContainer: {
    borderWidth: 1,
    borderColor: '#CCD7DF',
    borderRadius: 8,
    padding: 8,
  },
  eachScheduleContainer: {
    marginBottom: 4,
  },
  timeContainer: {
    flexDirection: 'row',
  },
  timeText: {
    color: '#50CAD2',
  },
  equipmentsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  equipmentsTextContainer: {
    backgroundColor: '#50CAD2',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
  equipmentsText: {
    color: '#fefefe',
  },
});
export const totalSumOfMoney = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 17,
    backgroundColor: '#fefefe',
    marginBottom: 6,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  lecturePriceText: {},
  rentalPriceText: {},
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  totalPriceText: {
    color: '#50cad2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPriceTextcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export const payButton = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fefefe',
    height: 65,
    paddingHorizontal: 17,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccd7df',
  },
  button: {
    width: '100%',
    height: '100%',
    backgroundColor: '#50CAD2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fefefe',
    fontSize: 16,
  },
});
