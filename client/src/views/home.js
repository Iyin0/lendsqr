import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/home.scss'

const Home = () => {

    const [fund, setFund] = useState(false)
    const [transfer, setTransfer] = useState(false)
    const [withdraw, setWithdraw] = useState(false)

    return (
        <div className="home">
            <div className="home-card">
                <div className="logout">
                    <Link to='/'>Logout</Link>
                </div>
                <h1>Hi, Isaac Bilewu</h1>
                <p>Your account balance: <span>150000</span></p>

                <div className="home-actions">
                    <button onClick={() => setFund(!fund)}>Fund aza</button>
                    <button onClick={() => setTransfer(!transfer)}>Transfer Fundz</button>
                    <button onClick={() => setWithdraw(!withdraw)}>Withdraw</button>
                </div>
            </div>
            {fund &&
                <div className="cover" >
                    <div className="cover-card">
                        <h2>Fund Your Account</h2>
                        <form action="">
                            <label htmlFor="">Acount Number</label> <br />
                            <input type="number" name='number' id='number' /> <br />
                            <label htmlFor="">Acount Name</label> <br />
                            <input type="text" name='name' id='name' /> <br />
                            <label htmlFor="">Bank</label> <br />
                            <input type="text" name='bank' id='bank' /> <br />
                            <label htmlFor="">Amount</label> <br />
                            <input type="number" name='amount' id='amount' /> <br />
                            <input type="submit" onClick={() => setFund(false)} /> <br />
                        </form>
                    </div>
                </div>
            }
            {transfer &&
                <div className="cover" >
                    <div className="cover-card">
                        <h2>Send Money</h2>
                        <form action="">
                            <label htmlFor="">Acount Number</label> <br />
                            <input type="number" name='number' id='number' /> <br />
                            <label htmlFor="">Acount Name</label> <br />
                            <input type="text" name='name' id='name' /> <br />
                            <label htmlFor="">Amount</label> <br />
                            <input type="number" name='amount' id='amount' /> <br />
                            <input type="submit" onClick={() => setTransfer(false)} /> <br />
                        </form>
                    </div>
                </div>
            }
            {withdraw &&
                <div className="cover" >
                    <div className="cover-card">
                        <h2>Withdraw Some Cash</h2>
                        <form action="">
                            <label htmlFor="">Acount Number</label> <br />
                            <input type="number" name='number' id='number' /> <br />
                            <label htmlFor="">Acount Name</label> <br />
                            <input type="text" name='name' id='name' /> <br />
                            <label htmlFor="">Bank</label> <br />
                            <input type="text" name='bank' id='bank' /> <br />
                            <label htmlFor="">Amount</label> <br />
                            <input type="number" name='amount' id='amount' /> <br />
                            <input type="submit" onClick={() => setWithdraw(false)} /> <br />
                        </form>
                    </div>
                </div>
            }
        </div>
    );
}

export default Home;