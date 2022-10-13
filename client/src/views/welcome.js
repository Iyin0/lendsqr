import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/welcome.scss'

const Welcome = () => {

    const url = "/api/accounts";
    const [text, setText] = useState(null)

    fetch(url)
        .then((res) => res.json())
        .then((data) => setText(data.message))

    return (
        <div className="welcome">
            {text &&
                <div className="welcome-card">
                    <h1>Welcome to Lendsqr</h1>
                    <h2>{text}</h2>
                    <div>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default Welcome;