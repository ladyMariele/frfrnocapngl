import site from '../../site-info.js'

function LandingPage() {

    return ( 
        <section className='landing-page'> 

        <div className='title'>
            <h1>{site.name}</h1>
        </div>

        <div className='buttons'>
            <button>Receive Messages</button>
            <button>Send Messages</button>
        </div>

        </section>
    )
    
}

export default LandingPage