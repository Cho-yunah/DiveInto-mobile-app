export type EmailInputProps = {
  requestCheckEmail: (
    email: string,
    setIsLoading: (bool: boolean) => void,
  ) => void;
};
