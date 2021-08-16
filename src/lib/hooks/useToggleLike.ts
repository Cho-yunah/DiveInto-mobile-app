import { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { getInstanceATK } from '@lib/api/axios';
import {
  communityListState,
  likeState,
  // setDeleteLikedSelector,
  // setAddLikedSelector,
  likedListState,
} from '@/src/recoil/CommunityStack';
import { liekCollectionRefreshState } from '@/src/recoil/Global';

function useToggleLike(id: number) {
  const communityList = useRecoilValue(communityListState);
  const [like, setLike] = useRecoilState(likeState(id));
  // 찜 모아보기 데이터 업데이트 관련 상태 업로드
  const setCommunityRefresh = useSetRecoilState(
    liekCollectionRefreshState('community'),
  );

  const Clickedlike = useCallback(() => {
    const requestToggleLiked = async () => {
      const instanchATK = await getInstanceATK();
      setLike(like => !like);

      try {
        like
          ? await instanchATK.delete(`/community/post/${id}/like`)
          : await instanchATK.post(`/community/post/${id}/like`);

        setCommunityRefresh(prevRefresh => prevRefresh + 1);
      } catch (e) {
        console.log(e.response.data);
      }
    };

    requestToggleLiked();
  }, [like, communityList]);

  return { like, setLike, Clickedlike };
}

export default useToggleLike;
