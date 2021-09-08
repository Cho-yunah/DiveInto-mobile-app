import { ContentItem } from '@recoil/CommunityStack';

export type PostingBodyType= {
  [key: string]: string | string[]
}

export type RequestPostCommunityType = {
  (body: FormData, postingId: number): Promise<undefined>;
  (body: PostingBodyType):Promise<ContentItem>
}

export type RequestEditCommunityType= {
  (body: PostingBodyType, id: number) : Promise<ContentItem>
}
