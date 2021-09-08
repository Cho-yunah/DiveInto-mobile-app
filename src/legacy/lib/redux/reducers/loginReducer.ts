// 액션 정의
export const LOGOUT = 'login/LOGOUT';
export const LOGIN = 'login/LOGIN';

// 액션 생성 함수
export const logOut = () => ({
  type: LOGOUT,
});

export const logIn = () => {
  return {
    type: LOGIN,
  };
};

// 초기 상태값
const INITIAL_STATE = {
  isLogin: false,
};

// 리듀서 함수 (상태 갱신 함수)
export const loginReducer = (
  state = INITIAL_STATE,
  action: { type: string },
) => {
  let newState;

  switch (action.type) {
    case LOGIN:
      newState = { ...state, isLogin: true }; // 새로운 상태값
      console.log('[redux] login : ', true);
      return newState; // 새로운 상태값으로 반영

    case LOGOUT:
      newState = { ...state, isLogin: false }; // 새로운 상태값
      console.log('[redux] login : ', false);
      return newState; // 새로운 상태값으로 반영

    default:
      return state; // 기존상태 그대로 유지
  }
};
