const firebase = require('firebase/app')

require('firebase/storage')
require('firebase/auth')
require('firebase/firestore')


const firebaseConfig = {
    apiKey: "AIzaSyCzu9ArKd9RhYSG8_0WtGuEDUWZhOekUUw",
    authDomain: "my-first-blog-bb127.firebaseapp.com",
    databaseURL: "https://my-first-blog-bb127.firebaseio.com",
    projectId: "my-first-blog-bb127",
    storageBucket: "my-first-blog-bb127.appspot.com",
    messagingSenderId: "1070976439159",
    appId: "1:1070976439159:web:13c2efcbc2fcca6b328772",
    measurementId: "G-CEN3XZ75B6"
};


const defaultProject = firebase.initializeApp(firebaseConfig);

const auth = defaultProject.auth()
const db = defaultProject.firestore()
const storage = defaultProject.storage();

exports.db = db
exports.auth = auth
exports.storage = storage
exports.default = defaultProject

