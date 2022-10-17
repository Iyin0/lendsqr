import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../scss/signup.scss'

const Signup = () => {

    const navigate = useNavigate()
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [cpw, setCpw] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (fname !== "" || lname !== "" || email !== "" || pw !== "" || cpw !== "") {
            if (cpw !== pw) {
                alert('Both passwords must tally')
            }
            else {
                await fetch("http://localhost:5000/api/accounts/register", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            fname: fname,
                            lname: lname,
                            email: email,
                            password: pw
                        }
                    )
                })
                    .then((res) => {
                        if (res === 200) {
                            setFname("")
                            setLname("")
                            setEmail("")
                            setPw("")
                            setCpw("")
                            alert('Account Created')
                        }
                    })
                    .catch((err) => console.log(err))
            }
        }
        else {
            alert('Field cannot be empty')
        }
    }

    return (
        <div className="login">
            <div className="login-card">
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">First Name</label>
                    <input type="text" name="fname" id="fname" required onChange={(e) => setFname(e.target.value)} /> <br />
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lname" id="lname" required onChange={(e) => setLname(e.target.value)} /> <br />
                    <label htmlFor="">Email address</label>
                    <input type="email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} /> <br />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required onChange={(e) => setPw(e.target.value)} /> <br />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="cpassword" id="cpassword" required onChange={(e) => setCpw(e.target.value)} /> <br />
                    <input type="submit" />

                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;