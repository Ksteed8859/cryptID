import { React } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>        
            <div className='landingTitle'>
                <h1 className='title'><span className='white'>CRYPT</span><span className='green'>ID</span></h1>
                <div className='slogan'>
                    <h2>Your online field guide to everything cryptic</h2>
                </div>
            </div>
            <div className='landingLinks'>
                <button className='landingLogin'>
                    <Link to='/login'>Login</Link>
                </button>
                <button className='landingSignup'>
                    <Link to='/signup'>Signup</Link>
                </button>
            </div>
        </div>  
    )
}

export default Landing;