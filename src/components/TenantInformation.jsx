import { TextField } from '@mui/material';
import React, { useState } from 'react';
import "../components/TenantInformation.css"
const TenantInformation = () => {

    //  Otp Generation

    const [otp, setOtp] = useState(new Array(6).fill(""))

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false
          
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }

    }


    return (
        <div className='row'>
            <div className='coltext-center'>
                <h2>TenantInformation</h2>
                <p>Enter the otp sent to your verify your identity</p>

                {
               
                    otp.map((data, index) => {
                        return <TextField
                        style={{marginTop:"220px"}}
                            className='otp-field'
                            type='text'
                            name="otp"
                            maxLength="1"
                            key={index}
                            value={data}
                            onChange={(e) => handleChange(e.target, index)}
                            onFocus={e => e.target.select()}
                        />
                    })
                    
                }

{/* add otp here  */}
                <p>OTP Entered - {otp.join("")}</p>
                <p>
                    <button
                        className="btn btn-secondary mr-2"
                        onClick={e => setOtp([...otp.map(v => "")])}
                    >
                        Reset
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={e =>
                            alert("Entered OTP is " + otp.join(""))
                        }
                    >
                        Submit
                    </button>
                </p>
            </div>

        </div>
    );
}

export default TenantInformation;
