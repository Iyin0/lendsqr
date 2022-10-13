import { Link, useNavigate } from "react-router-dom";
import '../scss/login.scss'

const Login = () => {

    const navigate = useNavigate()

    return (
        <div className="login">
            <div className="login-card">
                <h1>Login</h1>
                <form action="">
                    <label htmlFor="">Email address</label> <br />
                    <input type="email" name="email" id="email" /> <br />
                    <label htmlFor="">Password</label> <br />
                    <input type="password" name="password" id="password" /> <br />
                    <input type="submit" onClick={() => navigate('/home')} />

                    <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;