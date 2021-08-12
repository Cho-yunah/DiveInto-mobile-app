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
import { communityRefreshState } from '@/src/recoil/Global';

function useToggleLike(id: number) {
  const communityList = useRecoilValue(communityListState);
  const [like, setLike] = useRecoilState(likeState(id));
  const setCommunityRefresh = useSetRecoilState(communityRefreshState);

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
