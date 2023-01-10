import Footer from '../footer.js'
import { useState } from 'react'

function RegistrationPage()
{
    const [ name, setName ] = useState("")

    return (

        <div>
            <h1> Registration Page </h1>
            <h3>Enter your name:</h3>

            <form>
                <label>Name:
                    <input 
                        type = "text"
                        value = { name }
                        onChange = { ( e ) => setName( e.value ) }
                    />
                </label>
                <button type="submit"/>
            </form>

            This is a registration page
            <Footer />
        </div>

    )
}

export default RegistrationPage;