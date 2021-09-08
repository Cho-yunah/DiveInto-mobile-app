import CommonLoading from '@/src/components/common/CommonLoading';
import React, { ComponentType, Suspense } from 'react';

function withSuspense<P extends object>(
  Component: ComponentType<P>,
): React.FC<P> {
  return function WihLoadingComponent(props) {
    return (
      <Suspense fallback={<CommonLoading />}>
        <Component {...(props as P)} />
      </Suspense>
    );
  };
}

export default withSuspense;
