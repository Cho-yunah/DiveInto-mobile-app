import React, { Suspense } from 'react';

import CommunityLike from './CommunityLike';
import CommonLoading from '@components/common/CommonLoading';

export default function CommunityLikeScreen() {
  return (
    <Suspense fallback={CommonLoading}>
      <CommunityLike />
    </Suspense>
  );
}
