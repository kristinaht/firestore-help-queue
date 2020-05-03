import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC81yRnie-PlnFI6haKmhSNmEirzCGanHY",
  authDomain: "redux-help-queue-2c667.firebaseapp.com",
  databaseURL: "https://redux-help-queue-2c667.firebaseio.com",
  projectId: "redux-help-queue-2c667",
  storageBucket: "redux-help-queue-2c667.appspot.com",
  messagingSenderId: "190692495402",
  appId: "1:190692495402:web:5121f4e6010590ea0df353"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;