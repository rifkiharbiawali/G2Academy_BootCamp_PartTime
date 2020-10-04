const stateLogin = {
  isLogin: false,
};

const LoginReducer = (state = stateLogin, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLogin: !state.isLogin,
      };
    default:
      return state;
  }
};

export default LoginReducer;
