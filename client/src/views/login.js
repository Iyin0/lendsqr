import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../scss/login.scss'

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [pw, setPw] = useState(null)
    // onClick={() => navigate('/home')}

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email !== null || pw !== null) {
            await fetch("https://bilewu-iyin-lendsqr-be-test.herokuapp.com/api/accounts/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        email: email,
                        password: pw
                    }
                )
            })
                .then((res) => {
                    if (res.status === 200) {
                        navigate('/home')
                    }
                    return res.json()
                })
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
        }

    }

    return (
        <div className="login">
            <div className="login-card">
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Email address</label> <br />
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} /> <br />
                    <label htmlFor="">Password</label> <br />
                    <input type="password" name="password" id="password" onChange={(e) => setPw(e.target.value)} /> <br />
                    <input type="submit" />

                    <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;