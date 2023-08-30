import logo from './logo.svg';
import Home from './components/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import './App.css';
import TenantsDetails from './components/TenantsDetails';
import TenantsWorkplacedetails from './components/TenantsWorkplacedetails';
import PersonKnowingTenant from './components/PersonKnowingTenant';
import TenantInformation from './components/TenantInformation';
function App() {
  return (
 <div className="home-page">
    <div className="App">

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/TenantDetails" element={<TenantsDetails/>}/>
      <Route path="/TenantWorkplace" element={<TenantsWorkplacedetails/>}/>
      <Route path="/PersonKnowingTenant" element={<PersonKnowingTenant/>}/>
      <Route path="/tenantInfomation" element={<TenantInformation/>}/>
    </Routes>
  </BrowserRouter>
   
    </div>
    </div>
   
  );
}

export default App;
