export type PWInputProps = {
  isShow: boolean;
  onChangeText: (text: string) => void;
  updateSecureTextEntry: () => void;
  placeholder: '비밀번호' | '비밀번호 확인';
  isEmpty: boolean;
  isValid: boolean;
  validMessage: string;
  invalidMessage: string;
};
