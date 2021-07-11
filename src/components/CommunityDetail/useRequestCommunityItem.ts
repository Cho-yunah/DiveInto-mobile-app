import axios from 'axios';
import { useEffect } from 'react';
import  {atom, selector, useRecoilState, useSetRecoilState} from 'recoil';

const communityItemState = atom({
  key: 'communityItem',
  default: {
      id: '',
      title: '',
      category:'',
      tag: [],
      dateOfRegistration:'',
      content:'',
      // imageUrl: '', // api 추가요청 해야함
      // commentCount:0,
      // likeCount: 0,
      // liked: false, // api 추가요청 해야함
      // writerImage: // api 추가요청 해야함
  }
})

type communityItemSelectorType = {
  id: string,
  title: string,
  category:string,
  tag: string[],
  dateOfRegistration:string,
  content:string,
}

export const communityItemSelector= selector({
  key: 'communityItemSelector',
  get: ({get}) : communityItemSelectorType => {
    const {id, title, category, tag, dateOfRegistration, content}
  = get(communityItemState);

  return {id, title, category, tag, dateOfRegistration, content}
  }
})

export const useRequestCommunityItem = () => {
  const setCommunityItem = useSetRecoilState(communityItemState);
  const URL = `http://52.78.56.229:8082/community/post/1`

  useEffect(()=> {
    const requestCommunityItem = async()=> {
      try {
        const {data} = await axios.get(URL);
        console.log(data)

       const {
        id, title,
        category,
        tag,
        dateOfRegistration,
        content,
      } = data.postResource;
      setCommunityItem({
        id, title,
        category,
        tag,
        dateOfRegistration,
        content,
      });
      } catch(e) {
        console.log(e)
      }
    };
    requestCommunityItem();
  }, [])
}