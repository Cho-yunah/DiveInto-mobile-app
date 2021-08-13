import React, { Suspense } from 'react';

import NextLecture from './NextLecture';
import CommonLoading from '@components/common/CommonLoading';

export default function NextLectureScreen() {
  return (
    <Suspense fallback={CommonLoading}>
      <NextLecture />
    </Suspense>
  );
}
