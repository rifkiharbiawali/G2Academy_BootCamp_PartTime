const initLoginState = {
  isLogin: false,
  // dataUser: [{}],
};

const LoginReducer = (state = initLoginState, action) => {
  switch (action.type) {
    case "UBAH_LOGIN":
      return { isLogin: true };
    // case "TAMBAH_USER":
    //   return { ...state, dataUser: action.value };
    default:
      return state;
  }
};

export default LoginReducer;
