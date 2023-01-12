import site from '../../site-info.js'
import Footer from '../footer.js'
import frlogo from '../../frlogo.svg'

function LandingPage() {

    return ( 
        <section className='landing-page'> 

            <div className='title'>
                <img src={frlogo} /> 
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