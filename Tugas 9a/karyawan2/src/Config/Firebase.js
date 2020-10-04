import app from "firebase/app";

const firebaseConfig = {
  apikey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  registerFirebaseUser = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  loginFirebaseUser = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  logoutFirebaseUser = () => {
    return this.auth.signOut();
  };
}

export default Firebase;
