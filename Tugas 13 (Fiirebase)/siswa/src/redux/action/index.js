import firebase from "../../firebase";
export const LoginUserSiswa = (data) => (dispetch) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log("Sukses:", res);
        const userSiswa = {
          email: res.user.email,
          id: res.user.uid,
        };
        dispetch({ type: "TAMBAH_USER", value: userSiswa });
        dispetch({ type: "UBAH_LOGIN", value: true });
        resolve(userSiswa);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log("Tidak Sukses:", errorMessage);
        // ...
        reject(false);
      });
  });
};

export const ubahUser = (dataUser) => {
  return (dispetch) => {
    setTimeout(() => {
      return dispetch({ type: "TAMBAH_USERID", value: dataUser });
    }, 5000);
  };
};
