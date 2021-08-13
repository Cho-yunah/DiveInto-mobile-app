import React, { Suspense } from 'react';

import LastLecture from './LastLecture';
import CommonLoading from '@components/common/CommonLoading';

export default function LastLectureScreen() {
  return (
    <Suspense fallback={CommonLoading}>
      <LastLecture />
    </Suspense>
  );
}
