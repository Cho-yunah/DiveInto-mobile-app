import { atom, atomFamily, selector } from 'recoil';

export const assignText = atom({
  key: 'assignText',
  default: '',
});

export const Progress = atomFamily({
  key: 'Progress',
  default: { percent: 0, written: 0, total: 0 },
});

export const UploadedBucket = atomFamily({
  key: 'UploadedBucket',
  default: {
    bucket: '',
    key: '',
    size: 0,
  },
});

export const UploadedBucketList = selector({
  key: 'UploadedBucketList',
  get: ({ get }) => {
    const list = [];
    for (let i = 0; get(UploadedBucket(i)).bucket !== ''; i++) {
      const s3info = get(UploadedBucket(i));
      list.push(JSON.parse(s3info.toString()));
    }

    return list;
  },
});
