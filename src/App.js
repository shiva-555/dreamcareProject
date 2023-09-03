import logo from "./logo.svg";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import TenantsDetails from "./components/TenantsDetails";
import TenantsWorkplacedetails from "./components/TenantsWorkplacedetails";
import PersonKnowingTenant from "./components/PersonKnowingTenant";
import TenantInformation from "./components/TenantInformation";
import Login from "./components/login"
export const formContext = createContext();
const queryClient = new QueryClient();
function App() {
  const [inputs, setInputs] = useState({});

  return (
    <QueryClientProvider client={queryClient}>
    <formContext.Provider value={{ inputs, setInputs }}>
      <div className="home-page">
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Navbar />} />
              <Route path="/TenantDetails" element={<TenantsDetails />} />
              <Route path="/TenantWorkplace" element={<TenantsWorkplacedetails />} />
              <Route path="/PersonKnowingTenant" element={<PersonKnowingTenant />} />
              <Route path="/tenantInfomation" element={<TenantInformation />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </formContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
