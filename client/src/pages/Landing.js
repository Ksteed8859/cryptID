import { React } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <div className='landingBox'>
                <h1 className='title'><span className='white'>CRYPT</span><span className='red'>ID</span></h1>
                <div className='landingSmall'>
                    <h2>Your field guide to cryptid creatures</h2>
                </div>
            </div>
            <div className='landingLinks'>
                <button className='landingLogin'>
                    <Link to='/Login'>Login</Link>
                </button>
                <button className='landingSignup'>
                    <Link to='/Signup'>Signup</Link>
                </button>
            </div>
        </div>
    )
}

export default Landing;