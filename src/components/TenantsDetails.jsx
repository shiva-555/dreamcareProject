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

        const requiredFields = ['tenanatName', 'tenanatAddress', 'tenanatcityDistrict', 'tenanatsTate', 'identiproofTenant', 'tenantIdproofNum', 'tenanatpinCode', 'tenanatpinCode'];

        const emptyFields = requiredFields.filter(field => !inputs[field]);
        if (emptyFields.length > 0) {
            alert(`Please fill out the following fields: ${emptyFields.join(', ')}`);
        } else {
   
            navigate('/TenantWorkplace');
        }
      
     };
    
    return (
        <>
        <div><Navbar/>

      <h2 style={{color:"white",marginLeft:"570px",padding:"4px"}}>Tenant's Details</h2>
      
 
    
        <form onSubmit={handleSubmit}>
        <div className="tenant-form">
        <label>Tenant′s Name:
                    <input
                        type="text" 
                        name="tenanatName"
                        value={inputs.tenanatName || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Tenant's Photo:
          <input name="tenantPhoto" type="file" onChange={handleFileChange} />
           <button onClick={handleSubmit}>Upload</button>
           </label>
              

                <label>Tenant′s Permanent Address:
                    <input
                        type="text"
                        name="tenanatAddress"
                        value={inputs.tenanatAddress || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>Tenant′s City/District:
                    <input
                        type="text"
                        name="tenanatcityDistrict"
                        value={inputs.tenanatcityDistrict || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>State:
                    <input
                        type="text"
                        name="tenanatsTate"
                        value={inputs.tenanatsTate || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                Identity Proof of Tenant:
                    <select
                        name="identiproofTenant"
                        value={inputs.identiproofTenant || ""}
                        onChange={handleChange}
                        style={{color:"white"}}
                        required
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
                        required
                    />
                </label>

                <label>PinCode:
                    <input
                        type="number"
                        name="tenanatpinCode"
                        value={inputs.tenanatpinCode || ""}
                        onChange={handleChange}
                        required
                    />
                <button type="button"  onClick={handleNext}>Next</button>
                </label>

                </div>
            </form>
    
    </div>
    </>
  );
}

export default TenantsDetails;
