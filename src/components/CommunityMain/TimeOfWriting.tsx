import moment from 'moment'
import React from 'react'
import { Text } from 'react-native'
import { Time } from './types'

export const TimeOfWriting =({time}: Time) => {
  const monthInterval = moment().diff(moment(time), 'months')
  const dayInterval = moment().diff(moment(time), 'days') 
  const hoursInterval = moment().diff(moment(time), 'hours')
  const minutesInterval = moment().diff(moment(time), 'minutes') 

  const timeOfWriting = 
  (dayInterval === 0) 
    ? (hoursInterval === 0 
        ? minutesInterval=== 0? `방금 전` : `${minutesInterval}분 전` 
        : `${hoursInterval}시간 전`)
    : (0 < dayInterval && dayInterval <= 30 
        ? `${dayInterval}일 전` 
        : `${monthInterval}달 전`)

  return <Text>{timeOfWriting}</Text>
}

  // moment 시간 계산
  // const monthInterval = moment().diff(moment(dateOfRegistration), 'months');
  // const dayInterval = moment().diff(moment(dateOfRegistration), 'days');
  // const hoursInterval = moment().diff(moment(dateOfRegistration), 'hours');
  // const minutesInterval = moment().diff(moment(dateOfRegistration), 'minutes');

  // const timeOfWriting =
  //   dayInterval === 0
  //     ? (hoursInterval === 0
  //       ? `${minutesInterval}분 전`
  //       : `${hoursInterval}시간 전`
  //     )
  //     : (0 < dayInterval && dayInterval <= 30
  //       ? `${dayInterval}일 전`
  //       : `${monthInterval}달 전`
  //     );