import React from 'react';

import {
  CommonInput,
  OrganizationDropdown,
  UploadCertificate,
} from '@components/ApplyLecturer';
import { HeaderContainer } from '@components/ProfileMain';
import { ApplyLectureViewType } from './types';

export default function ApplyLecturerView({
  intro,
  onChange,
  setGroup,
}: ApplyLectureViewType) {
  return (
    <>
      <HeaderContainer currScreen="instructor" buttonText="프로필사진추가" />
      <CommonInput
        placeholderText="강사소개글"
        value={intro}
        handleInputText={onChange}
      />
      <OrganizationDropdown setGroup={setGroup} />
      <UploadCertificate />
    </>
  );
}

// const ApplyLecturerView = (
//   <>
//     <HeaderContainer currScreen="lecturer" buttonText="프로필사진추가" />
//     <CommonInput
//       placeholderText="강사소개글"
//       value={intro}
//       handleInputText={onChangeIntro}
//     />
//     <OrganizationDropdown setGroup={setGroup} />
//     <UploadCertificate />
//   </>
// );
