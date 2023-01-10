import React from 'react'
import Footer from '../footer.js'
import { useState } from 'react'
import { AddUser, GetUser } from '../firebase/FirebaseExtension.js'

function RegistrationPage()
{
    const [ userName, setUserName ] = useState("")

    GetUser('4pg6z90poy70u')

    function handleSubmit( event )
    {
        event.preventDefault()
        AddUser( userName )
    }
    
    function handleChange( event )
    {
        setUserName( event.target.value )
    }

    return (

        <div>
            <h1> Registration Page </h1>
            <h3>Enter your name:</h3>

            <form onSubmit={ handleSubmit }>
                <label>Name:
                    <input 
                        name = "userName"
                        type = "text"
                        value = { userName }
                        onChange = { handleChange }
                    />
                </label>
                <button type="submit"> Start Receiving Messages </button>
            </form>

            This is a registration page
            <Footer />
        </div>

    )
}

export default RegistrationPage;