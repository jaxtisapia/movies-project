import * as firebase from 'firebase/app'
import settings from '../config/settings'

import 'firebase/database'

var firebaseConfig = {
    apiKey: settings.firebase.apiKey,
    authDomain: settings.firebase.authDomain,
    databaseURL: settings.firebase.databaseURL,
    storageBucket: settings.firebase.storageBucket,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const database = firebase.database().ref()

export default firebase
