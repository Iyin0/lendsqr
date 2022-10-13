import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home';
import Login from './login';
import Signup from './signup';
import Welcome from './welcome';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;