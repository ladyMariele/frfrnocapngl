import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, set } from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY84RYCuzRTyYHqUsgd9T9LiXAoaiC7OA",
  authDomain: "sampleproject-d5085.firebaseapp.com",
  databaseURL: "https://sampleproject-d5085-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sampleproject-d5085",
  storageBucket: "sampleproject-d5085.appspot.com",
  messagingSenderId: "98580911881",
  appId: "1:98580911881:web:cc9f612c24693bceea65d8",
  measurementId: "G-S21RDDQJ74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase()

export function GetMessages()
{

}

export function SendMessage()
{

}

export function GetUsers()
{

}

export function GetUser()
{

}

export function AddUser(name)
{
    set(ref(db, 'users/' + '6'), {
        name: name
    })
}