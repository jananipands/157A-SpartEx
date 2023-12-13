import './App.css';
import Homepage from "./components/homepage/Homepage.js";
import Login from './components/login/login';
import CreateAccount from './components/createaccount/CreateAccount'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAppliance from './components/addlistings/addAppliance/AddAppliance';
import AddFurniture from './components/addlistings/addFurniture/AddFurniture';
import AddTextbook from './components/addlistings/addTextbook/AddTextbook';
import ManageListings from './components/managelistings/ManageListings';
import AddListing from './components/addlistings/AddListing';
import DisplayAppl from './components/dashboard/displayappl/DisplayAppl';
import DisplayFurniture from './components/dashboard/displayfurniture/DisplayFurniture';
import DisplayTextbook from './components/dashboard/displaytextbook/DisplayTextbook';
import UpdateListing from './components/updatelisting/UpdateListing';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createacct" element={<CreateAccount />} />
        <Route path="/addappl" element={<AddAppliance />} />
        <Route path="/addfurniture" element={<AddFurniture />} />
        <Route path="/addtbook" element={<AddTextbook />} />
        <Route path="/managelistings" element={<ManageListings />} />
        <Route path="/addlisting" element={<AddListing />} />
        <Route path="/appliances" element={<DisplayAppl />} />
        <Route path="/furniture" element={<DisplayFurniture />} />
        <Route path="/textbooks" element={<DisplayTextbook />} />
        <Route path="/updatelisting" element={<UpdateListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
