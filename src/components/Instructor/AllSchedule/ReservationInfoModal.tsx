import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

import Modal from '@components/common/Modal';

import { useRecoilValue } from 'recoil';
import { currScheduleIdState } from '@recoil/Instructor/AllSchedule';

import { getInstanceATK } from '@lib/api/axios';

import { PointBlue } from '@config/colors';

type ReservationInfo = {
  reservationId: number;
  studentId: number;
  studentNickname: string;
  studentNumber: number;
  reservationEquipmentInfoList: [
    {
      equipmentName: string;
      size: string;
      rentNumber: number;
    },
  ];
};

export function ReservationInfoModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const scheduleId = useRecoilValue(currScheduleIdState);

  const [reservationInfoList, setReservationInfoList] = useState<
    ReservationInfo[]
  >([]);

  useLayoutEffect(() => {
    const init = async () => {
      const instance = await getInstanceATK();
      try {
        const res = await instance.get('/schedule/reservation-info', {
          params: {
            scheduleId,
          },
        });

        console.log(
          '신청현황 조회 결과 : ',
          res.data._embedded.reservationInfoList,
        );
        setReservationInfoList(res.data._embedded.reservationInfoList);
      } catch (e) {
        console.log('신청현황 조회 실패 ', e);
      }
    };

    init();
  }, [scheduleId]);

  return (
    <Modal visible={visible} onClose={onClose} title="신청 현황">
      {reservationInfoList ? (
        <ScrollView
          // contentContainerStyle={{ flex: 1 }}
          style={{
            // justifyContent: 'flex-start',
            // alignItems: 'flex-start',
            width: '90%',
          }}
        >
          {reservationInfoList.map(info => (
            <Pressable
              style={{
                flexDirection: 'row',
                width: '100%',
                padding: 5,
                marginTop: 8,
                borderRadius: 5,
                backgroundColor: 'lightgrey',
                alignItems: 'center',
                paddingLeft: 10,
              }}
            >
              <Text style={{}}> {info.studentNickname}</Text>
              <View
                style={{
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  flex: 1,
                  justifyContent: 'flex-end',
                }}
              >
                {info.reservationEquipmentInfoList.map(equipInfo => (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 10,
                      backgroundColor: PointBlue,
                      padding: 3,
                      borderRadius: 7,
                      marginTop: 3,
                      marginBottom: 3,
                    }}
                  >
                    <Text>{equipInfo.equipmentName} </Text>
                    <Text>{equipInfo.size}</Text>
                  </View>
                ))}
              </View>
            </Pressable>
          ))}
        </ScrollView>
      ) : (
        <View></View>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({});
