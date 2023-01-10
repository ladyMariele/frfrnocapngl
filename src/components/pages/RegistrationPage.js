import Footer from '../footer.js'
import { useState } from 'react'
import { AddUser } from '../firebase/FirebaseExtension.js'

function RegistrationPage()
{
    const [ name, setName ] = useState("")

    function handleSubmit(event)
    {
        event.preventDefault();
        console.log(event.target.name)
        AddUser(event.target.name)
    }

    return (

        <div>
            <h1> Registration Page </h1>
            <h3>Enter your name:</h3>

            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input 
                        name = "name"
                        type = "text"
                        value = { name }
                        onChange = { ( e ) => setName( e.value ) }
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