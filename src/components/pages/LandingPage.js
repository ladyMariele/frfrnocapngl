import site from '../../site-info.js'
import Footer from '../footer.js'

function LandingPage() {

    return ( 
        <section className='landing-page'> 

            <div className='title'>
                <h1>{site.name}</h1>
            </div>

            <div className='landing-btns'>
                <button>Receive Messages</button>
                <button>Send Messages</button>
            </div>

            <Footer/>
        </section>
    )
    
}

export default LandingPage