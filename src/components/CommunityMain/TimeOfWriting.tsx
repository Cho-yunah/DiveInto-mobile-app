import moment from 'moment'
import React from 'react'

export const TimeOfWriting =({time}) => {
  const monthInterval = moment().diff(moment(time), 'months')
  const dayInterval = moment().diff(moment(time), 'days') 
  const hoursInterval = moment().diff(moment(time), 'hours')
  const minutesInterval = moment().diff(moment(time), 'minutes') 

  const timeOfWriting = 
  (dayInterval === 0) 
    ? (hoursInterval === 0 ? `${minutesInterval}분 전` : `${hoursInterval}시간 전`)
    : (0 < dayInterval && dayInterval <= 30 ? `${dayInterval}일 전` : `${monthInterval}달 전`)

  return (<>{timeOfWriting}</>)
}