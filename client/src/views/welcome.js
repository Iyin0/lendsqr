import { Link } from 'react-router-dom';
import '../scss/welcome.scss'

const Welcome = () => {

    return (
        <div className="welcome">
            <div className="welcome-card">
                <h1>Welcome to Lendsqr</h1>
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>
            </div>
        </div>
    );
}

export default Welcome;