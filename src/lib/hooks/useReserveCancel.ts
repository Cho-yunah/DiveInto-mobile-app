import { useState } from 'react';
import { getInstanceATK } from '../api/axios';

export default function useReserveCancel(type: 'last' | 'next') {
  const [show, setShow] = useState(false);

  const requestReserveCancel = async (id: number) => {
    const instanceAtk = await getInstanceATK();
    try {
      await instanceAtk.delete(`/schedule${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return [show, setShow, requestReserveCancel] as const;
}
