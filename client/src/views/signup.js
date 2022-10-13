import { Link, useNavigate } from "react-router-dom";
import '../scss/signup.scss'

const Signup = () => {

    const navigate = useNavigate()

    return (
        <div className="login">
            <div className="login-card">
                <h1>Signup</h1>
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="fname" id="fname" /> <br />
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lname" id="lname" /> <br />
                    <label htmlFor="">Email address</label>
                    <input type="email" name="email" id="email" /> <br />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" /> <br />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="cpassword" id="cpassword" /> <br />
                    <input type="submit" onClick={() => navigate('/login')} />

                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;