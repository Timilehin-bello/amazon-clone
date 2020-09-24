import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDo6d_wWfgL54A8EdwGBqPg8p_SfcHCpTk",
  authDomain: "amzon-clone-cn.firebaseapp.com",
  databaseURL: "https://amzon-clone-cn.firebaseio.com",
  projectId: "amzon-clone-cn",
  storageBucket: "amzon-clone-cn.appspot.com",
  messagingSenderId: "870382906494",
  appId: "1:870382906494:web:ce53dc101e5aa840c53c2f",
  measurementId: "G-SC8QH4XPGV",
});

const auth = firebase.auth();

export { auth };
