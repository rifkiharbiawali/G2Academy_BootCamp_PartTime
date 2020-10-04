const userState = {
  dataUser: [""],
};

const DataUser = (state = userState, action) => {
  switch (action.type) {
    case "TAMBAH_USERID":
      return {
        dataUser: [...state.dataUser, action.value],
        // dataUser: action.value,
      };
    default:
      return state;
  }
};

export default DataUser;
