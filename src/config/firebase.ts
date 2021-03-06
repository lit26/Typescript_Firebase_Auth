import firebase from 'firebase/app';
import 'firebase/auth';
import config from '../config/config';

const Firebase = firebase.initializeApp(config);

export const Providers = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export default Firebase;
