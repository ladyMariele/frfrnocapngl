import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, set, get, child } from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "process.env.API_KEY",
    authDomain: "frfrnocapngl.firebaseapp.com",
    databaseURL: "https://frfrnocapngl-default-rtdb.firebaseio.com",
    projectId: "frfrnocapngl",
    storageBucket: "frfrnocapngl.appspot.com",
    messagingSenderId: "747628761820",
    appId: "1:747628761820:web:638d5556f032ef0b775a19",
    measurementId: "G-VFMV1JGJHB"
};

// Initialize Firebase
const app               = initializeApp(firebaseConfig)
const db                = getDatabase()

const userTable         = 'users/'
const messageTable      = 'messages/'

export function GetMessages()
{

}

// export function SendMessage(userId, message)
// {
//     set(ref(db, messageTable + userId), {
//         name: name,
//         key: key
//     })
// }

export function GetUsers()
{

}

export function GetUser(userId)
{
    get(child(ref(db), userTable+userId)).then((snapshot) => {

        if(snapshot.exists())
        {
            return snapshot.val()
        }
        else
        {
            return null
        }

    }).catch((error) => {

        return "-1"

    });
}

// WIP recursion checker

// let recusionCount = 0
// let maxRecursion = 10

// function CheckSafetyRecursion()
// {
//     recusionCount++
    
//     if( recursionCount >= maxRecursion )
//     {
//         console.log("Max recusion count reached. This means every new randomly generated alpha numeric id is owned by a user")
//         console.log("Try increasing alpha numeric length")
//         return false
//     }
    
//     return true
// }

export function AddUser(name)
{

    let userId = GenerateRandomAlphaNumbericId()
    let key = GenerateRandomAlphaNumbericId()

    // if(GetUser( userId ) == "-1")
    // {
    //    console.log("A firebase error occured")
    //    return;
    // }

    // if(GetUser( userId ) == null)
    // {
    //     console.log("User existed, generation new user")
    //     AddUser(name)
    //     return;
    // }

    set(ref(db, userTable + userId), {
        name: name,
        key: key,
        messages: { 
            message1 : {
                message: "Welcome!",
                isOpened: false
            }
        }
    })

    // SendMessage()
}

function GenerateRandomAlphaNumbericId( length )
{
    // if length not specified, make it 13
    length = length || 13

    // create 2 random alpha numeric random string
    // you need 2 because 1 string has only a random range around 9 - 12
    // substr(2) removes the first 2 digits which is "0."
    //
    // https://www.geeksforgeeks.org/generate-random-alpha-numeric-string-in-javascript/

    let randomAlpha1 = Math.random().toString( 36 ).substr( 2 )
    let randomAlpha2 = Math.random().toString( 36 ).substr( 2 )

    // combine both random alpha 
    let randomAlphaCombined = randomAlpha1 + randomAlpha2

    return randomAlphaCombined.substring(0, length)
}