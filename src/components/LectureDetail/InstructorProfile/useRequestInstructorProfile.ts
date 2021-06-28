import instance from '@/src/lib/api/axios';
import { lectureInstructorProfileState } from '@/src/recoil/LectureStack';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const useRequestInstructorProfile = () => {
  const setLectureInstructorProfile = useSetRecoilState(
    lectureInstructorProfileState,
  );

  useEffect(() => {
    const requestInstructorProfile = async () => {
      try {
        const res = await instance.get(
          `/lecture/instructor/info/creator?lectureId=${1}`,
        );
        console.log(res);
        const { instructorId, nickName, selfIntroduction, profilePhotoUrl } =
          res.data;

        setLectureInstructorProfile({
          instructorId,
          nickName,
          selfIntroduction,
          profilePhotoUrl,
        });
      } catch (e) {
        console.log(e);
      }
    };

    requestInstructorProfile();
  }, []);
};
export default useRequestInstructorProfile;
