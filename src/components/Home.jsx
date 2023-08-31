import React, { useState, useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import '../components/Home.css'
import { useNavigate } from 'react-router-dom';
import { formContext } from '../App'

const Home = () => {
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
       
        const requiredFields = ['policeStation', 'fullName', 'mobileNumber', 'emailId', 'address', 'cityDistrict', 'state', 'pinCode'];

        const emptyFields = requiredFields.filter(field => !inputs[field]);
        if (emptyFields.length > 0) {
            alert(`Please fill out the following fields: ${emptyFields.join(', ')}`);
        } else {
            navigate('/TenantDetails');
        }
        
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
                        required
                    >
                        <option  style={{backgroundColor:"royalblue"}} value="">Select a name</option>
                        <option   style={{backgroundColor:"royalblue"}} value="Hinjewadi">Hinjewadi</option>
                        <option  style={{backgroundColor:"royalblue"}} value="Baner">Baner</option>
                        <option  style={{backgroundColor:"royalblue"}} value="ShivajiNagar">ShivajiNagar</option>
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
                        required
                    />
                </label>
                

                <label>Mobile Number:
                    <input
                        type="number"
                        name="mobileNumber"
                        value={inputs.mobileNumber || ""}
                        onChange={handleChange}
                        required
                    />
                </label>


                <label>Email Id:
                    <input
                        type="text"
                        name="emailId"
                        value={inputs.emailId || ""}
                        onChange={handleChange}
                        required
                    />
                </label>


                <label>Address:
                    <input
                        type="text"
                        name="address"
                        value={inputs.address || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>City/District:
                    <input
                        type="text"
                        name="cityDistrict"
                        value={inputs.cityDistrict || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>State:
                    <input
                        type="text"
                        name="state"
                        value={inputs.state || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>PinCode:
                    <input
                    
                        type="text"
                        name="pinCode"
                        value={inputs.pinCode || ""}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button type="button" style={{backgroundColor:"royalblue",width:"200px",height:"50px",marginTop:"20px"}} onClick={handleNext}>Next</button>
            </form>

        </div>
        </div>
    );
}

export default Home;
