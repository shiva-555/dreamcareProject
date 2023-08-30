import React, { useState} from 'react';
import Navbar from '../Navbar/Navbar';
import '../components/Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const [inputs, setInputs] = useState({});

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
        
        navigate('/TenantDetails');
      };
    return (

        <div>
            <Navbar/>
        
        <div class="form-container">
            <h2 style={{color:"white"}}>Property Owner Details</h2>
            <form onSubmit={handleSubmit} className="form-grid">
                <label>
                    Select police Station:
                    <select
                        name="policeStation"
                        value={inputs.policeStation || ""}
                        onChange={handleChange}
                        style={{color:"white"}}
                    >
                        <option value="">Select a name</option>
                        <option value="Hinjewadi">Hinjewadi</option>
                        <option value="Baner">Baner</option>
                        <option value="ShivajiNagar">ShivajiNagar</option>
                        {/* Add more options as needed */}
                    </select>
                </label>

                <label>
                    Property Owner's Photo:
          <input type="file" onChange={handleFileChange} />
           <button onClick={handleSubmit}>Upload</button>
           </label>
                
              
                <label>Full Name:
                    <input 
                        className='fullname-container'
                        style={{width:"100%"}}
                        type="text"
                        name="fullName"
                        value={inputs.fullName || ""}
                        onChange={handleChange}
                    />
                </label>
                

                <label>Mobile Number:
                    <input
                        type="number"
                        name="mobileNumber"
                        value={inputs.mobileNumber || ""}
                        onChange={handleChange}
                    />
                </label>


                <label>Email Id:
                    <input
                        type="text"
                        name="emailId"
                        value={inputs.emailId || ""}
                        onChange={handleChange}
                    />
                </label>


                <label>Address:
                    <input
                        type="text"
                        name="address"
                        value={inputs.address || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>City/District:
                    <input
                        type="text"
                        name="cityDistrict"
                        value={inputs.cityDistrict || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>State:
                    <input
                        type="text"
                        name="sTate"
                        value={inputs.sTate || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>PinCode:
                    <input
                    
                        type="text"
                        name="pinCode"
                        value={inputs.pinCode || ""}
                        onChange={handleChange}
                    />
                </label>

                <button type="button" style={{backgroundColor:"ivory white",width:"200px",height:"50px",marginTop:"20px"}} onClick={handleNext}>Next</button>
            </form>

        </div>
        </div>
    );
}

export default Home;
