import { useRecoilValue, useSetRecoilState } from 'recoil';
import instance, { getInstanceATK } from '@/src/lib/api/axios';
import { useEffect } from 'react';
import { commentListType, commentState } from '@/src/recoil/CommunityStack';

export const useRequestComments =({id}) => {
  const setComment = useSetRecoilState<commentListType[]>(commentState)
 
  useEffect(()=> {
    const requestComments= async() => {
      try{
        const commentResource = await instance.get(`/community/comment/post/${id}?page=0&size=5`)
         commentResource.data._embedded
         ? setComment(commentResource.data._embedded.commentsModelList)
         : setComment([])
        }
      catch(e) {
        console.log(e)
      }
    }
    requestComments()
  },[setComment, id])
}

// export type CommentPostingBodyType= {
//   content : string
// }

// type CommentItem = {
//   id : number,
//   dateOfWriting : string,
//   content : string
// }