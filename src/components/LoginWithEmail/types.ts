export type LoginButtonProps = {
  requestLogin: (
    email: string,
    password: string,
    setIsLoading: (bool: boolean) => void,
  ) => void;
};
