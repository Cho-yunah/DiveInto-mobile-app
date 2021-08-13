import React, { Suspense } from 'react';

import LectureLike from './LectureLike';
import CommonLoading from '@components/common/CommonLoading';
import { useRecoilValueLoadable } from 'recoil';

export default function LectureLikeScreen() {
  return (
    <Suspense fallback={CommonLoading}>
      <LectureLike />
    </Suspense>
  );
}
