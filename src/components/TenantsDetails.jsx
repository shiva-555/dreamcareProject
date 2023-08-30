import React,{useState, useContext } from 'react';
import "../components/TenantsDetails.css"
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { formContext } from '../App'

const TenantsDetails = () => {
    const {inputs, setInputs} = useContext(formContext)
//   const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
      console.log(event.target.value)
      const name = event.target.name;
      const value = event.target.value;
      console.log(inputs)
      setInputs(values => ({ ...values, [name]: value }))
  }

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      setInputs(values => ({ ...values, file: file }));
    };
  
    const handleSubmit = (event) => {
        console.log(inputs)
        event.preventDefault();
    };
    
     //   when click on next button it redirect to the route

     const navigate = useNavigate();

     const handleNext = () => { 
       navigate('/TenantWorkplace');
     };
    
    return (
        <>
        <div><Navbar/>

      <h2 style={{color:"white",marginLeft:"570px",padding:"4px"}}>Tenant's Details</h2>
      
    <div>
    
        <form onSubmit={handleSubmit} style={{marginTop:"16px"}}>
        <div className="tenant-form">
        <label>Tenant′s Name:
                    <input
                        type="text" 
                        name="tenanatName"
                        value={inputs.tenanatName || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Tenant's Photo:
          <input type="file" onChange={handleFileChange} />
           <button onClick={handleSubmit}>Upload</button>
           </label>
              

                <label>Tenant′s Permanent Address:
                    <input
                        type="text"
                        name="tenanatAddress"
                        value={inputs.tenanatAddress || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>Tenant′s City/District:
                    <input
                        type="text"
                        name="tenanatcityDistrict"
                        value={inputs.tenanatcityDistrict || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>State:
                    <input
                        type="text"
                        name="tenanatsTate"
                        value={inputs.tenanatsTate || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>
                Identity Proof of Tenant:
                    <select
                        name="identiproofTenant"
                        value={inputs.identiproofTenant || ""}
                        onChange={handleChange}
                        style={{color:"white"}}
                    >
                        <option value="">Identity Proof of Tenant</option>
                        <option value="AdharCard">Adhar Card</option>
                        <option value="panCard">PanCard</option>
                        <option value="voterId">voterID</option>
                        <option value="drivingLicense">Driving License</option>
                        <option value="rationCard">Ration Card</option>
                        {/* Add more options as needed */}
                    </select>
                </label>

                <label>Tenant′s Identity Proof no:
                    <input
                        type="text"
                        name="tenantIdproofNum"
                        value={inputs.tenantIdproofNum || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>PinCode:
                    <input
                        type="number"
                        name="tenanatpinCode"
                        value={inputs.tenanatpinCode || ""}
                        onChange={handleChange}
                    />
                </label>

                </div>
                <button type="button" style={{width:"200px",height:"50px",marginBottom:"80px",marginLeft:"570px"}} onClick={handleNext}>Next</button>
            </form>
    </div>
    </div>
    </>
  );
}

export default TenantsDetails;
