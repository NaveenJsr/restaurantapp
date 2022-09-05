import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDJsV2q5lBrniP4ZUN4AXqjf9ob9k_5ZiQ",
    authDomain: "restaurantapp-32a28.firebaseapp.com",
    databaseURL: "https://restaurantapp-32a28-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-32a28",
    storageBucket: "restaurantapp-32a28.appspot.com",
    messagingSenderId: "144947107721",
    appId: "1:144947107721:web:9dfb8cb08d7c875289f358"
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, firestore, storage };