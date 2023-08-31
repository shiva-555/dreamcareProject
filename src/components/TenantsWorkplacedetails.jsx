import React,{useState, useContext} from 'react';
import "../components/TenantsWorkplacedetails.css"
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { formContext } from '../App'

const TenantsWorkplacedetails = () => {
    const {inputs, setInputs} = useContext(formContext)

    // const [inputs, setInputs] = useState({});

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
      
   
        // Redirect to the next page

        const requiredFields = ['tenanatWorkmobileNumber', 'tenantworkemailId', 'tenanatOccupation', 'tenanatworkAddress', 'tenanatworkcityDistrict', 'tenanatworksTate', 'tenanatworkpinCode'];

        const emptyFields = requiredFields.filter(field => !inputs[field]);
        if (emptyFields.length > 0) {
            alert(`Please fill out the following fields: ${emptyFields.join(', ')}`);
        } else {
   
            navigate('/PersonKnowingTenant');
        }
        
       
      };


  return (
    <>
     <div><Navbar/>
     <h2 style={{color:"white",marginLeft:"570px",padding:"4px"}}>Tenant's Work Details</h2>
    <div>
        <form onSubmit={handleSubmit} style={{marginTop:"50px"}}>
        <div className="tenant-form">
        <label>Tenant′s Mobile Number:
                    <input
                        type="number"
                        name="tenanatWorkmobileNumber"
                        value={inputs.tenanatWorkmobileNumber || ""}
                        onChange={handleChange}
                        required
                    />
                </label>


                <label>Tenant′s email id:
                    <input
                        type="text"
                        name="tenantworkemailId"
                        value={inputs.tenantworkemailId || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

        

                <label>Tenant′s Occupation:
                    <input
                        type="text"
                        name="tenanatOccupation"
                        value={inputs.tenanatOccupation || ""}
                        onChange={handleChange}
                        required
                    />
                </label>


                <label>Address of Tenant Place Of Work:
                    <input
                        type="text"
                        name="tenanatworkAddress"
                        value={inputs.tenanatworkAddress || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>Tenant′s City/District:
                    <input
                        type="text"
                        name="tenanatworkcityDistrict"
                        value={inputs.tenanatworkcityDistrict || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>State:
                    <input
                        type="text"
                        name="tenanatworksTate"
                        value={inputs.tenanatworksTate || ""}
                        onChange={handleChange}
                        required
                    />
                </label>


                <label>PinCode:
                    <input
                        type="number"
                        name="tenanatworkpinCode"
                        value={inputs.tenanatworkpinCode || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button type="button" style={{backgroundColor:"ivory white",width:"200px",height:"50px",marginTop:"20px"}} onClick={handleNext}>Next</button>
                </div>
            </form>
    </div>
    </div>
    </>
  );
}

export default TenantsWorkplacedetails;

