import { Button } from '@mui/base';
import { CardActions, CardContent, CardHeader, TextField } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import CachedIcon from '@mui/icons-material/Cached';
import "../components/PersonKnowingTenant.css"
import Navbar from '../Navbar/Navbar';
import { formContext } from '../App'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

// hook

import {useComplaint} from '../helpers/hooks/policeComplainthook.js'

const PersonKnowingTenant = () => {
    const {inputs, setInputs} = useContext(formContext)
    const navigate = useNavigate();
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


    // for captcha generation

    const randomString = Math.random().toString(36).slice(8)
    const [captcha, setCaptcha] = useState(randomString)
    const [text, setText] = useState("")
    const [valid, setValid] = useState(false)
    const [success, setSuccess] = useState(false)
  
    const refreshcaptchaString = () => {
        setCaptcha(Math.random().toString(36).slice(8))
    }


      // checkbox

      const [isChecked, setIsChecked] = useState(false);

      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requiredFields = ['personKnowing1name', 'personknowing1contact', 'personKnowing2name', 'personknowing2contact', 'agentName', 'agentDetails', 'tenanatworkpinCode'];

        const emptyFields = requiredFields.filter(field => !inputs[field]);
        if (emptyFields.length > 0) {
            return alert(`Please fill out the following fields: ${emptyFields.join(', ')}`);
        }

        if (text === captcha) {
            setValid(false)
            setSuccess(true)
            alert("Success")
        } else {
            setValid(true)
            setSuccess(false)
            alert("please enter correct captcha")
        }

        // for chekbox

        if (isChecked) {
            alert('Form submitted');
            try {
                const result = await axios.post('http://localhost:5000/policeComplaint', inputs);

                if (result?.data?.status) {
                    navigate('/tenantInfomation');
                }
            } catch (e) {
                console.log(e);
                if (e?.message) {
                    alert(e.message);
                }
            }
        } else {
            alert('Please check the checkbox before submitting.');
        }
    };
   
    return (
        <>
            <div><Navbar />
                <div>

                    <div>
                <h2 style={{ color: "white", marginLeft: "570px"}}>Person Knowing Tenant</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="tenant-form">
                                <label>Person 1 Name:
                                    <input
                                        className='fullname-container'
                                        style={{ width: "100%" }}
                                        type="text"
                                        name="personKnowing1name"
                                        value={inputs.personKnowing1name || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>Contact number1 :
                                    <input
                                        type="number"
                                        name="personknowing1contact"
                                        value={inputs.personknowing1contact || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>Person 2 Name:
                                    <input
                                        className='fullname-container'
                                        style={{ width: "100%" }}
                                        type="text"
                                        name="personKnowing2name"
                                        value={inputs.personKnowing2name || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>Contact number2 :
                                    <input
                                        type="number"
                                        name="personknowing2contact"
                                        value={inputs.personknowing2contact || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>Agent Name:
                                    <input
                                        className='fullname-container'
                                        style={{ width: "100%" }}
                                        type="text"
                                        name="agentName"
                                        value={inputs.agentName || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>Agent Details:
                                    <input
                                        className='fullname-container'
                                        style={{ width: "100%" }}
                                        type="text"
                                        name="agentDetails"
                                        value={inputs.agentDetails || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <CardActions>
                                    <label style={{ marginRight: "20px" }}>Enter valid Captcha</label>
                                    <div className='h3' style={{color:"white"}}>{captcha}</div>
                                    <Button 
                                    
                                    style={{backgroundColor:"transparent"}}
                                        onClick={() => refreshcaptchaString()}
                                    >
                                   <RefreshIcon/>
                                    </Button>
                                </CardActions>

                                <input
                                    style={{ backgroundColor: "transparent", color: "white",height:"48px" }}
                                    value={text}
                                    onChange={(event) => setText(event.target.value)}
                                    required
                                />

                                <label>
                                    <input
                                    style={{marginRight:"240px",height:"18px"}}
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        required
                                    />
                                    I agree Terms & Conditions
                                </label>

                                <button className='btn-container'
                                    type='submit'
                                    disabled={!isChecked}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonKnowingTenant;
