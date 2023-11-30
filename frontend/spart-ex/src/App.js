import './App.css';
import Homepage from "./components/homepage/Homepage.js";
import Login from './components/login/login';
import CreateAccount from './components/createaccount/CreateAccount'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createacct" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
