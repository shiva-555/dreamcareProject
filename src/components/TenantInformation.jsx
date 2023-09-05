import { TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import "../components/TenantInformation.css"
import { formContext } from '../App'
import {Html} from 'react-pdf-html'
import {Document, Page} from 'react-pdf'
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import Navbar from '../Navbar/Navbar';


const TenantInformation = () => {
    const {inputs, setInputs} = useContext(formContext)

    //  Otp Generation

    function getData () {
        let html = [];
        let tr = []
        for (let key in inputs) {
            if (key === 'mobileNumber') {
                fetch('http://localhost:5000/otp?number=' + inputs[key])
            }
            tr.push(
                <tr key={key}>
                    <td>{key}</td>
                    <td>{inputs[key]}</td>
                </tr>
            );
        }

        html.push(
            <div className="container">
                <table className="my-style">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                  <h3>Complaint Form</h3>
                    {tr}
                    </tbody>
                </table>
            </div>
        )

        return html
    }

      const exportPDF = () => {
        const data = getData()
        let element = (
            <>{data.map((el) => el)}</>
        );
        const doc = new jsPDF("p", "pt", "letter");
        doc.html(ReactDOMServer.renderToString(element), {
          callback: function (doc) {
            doc.save('sample.pdf');
          }
        });
      };

    const [otp, setOtp] = useState(new Array(6).fill(""))
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false
          
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }

    }
    return (
        <>
        <Navbar />

                    <h2 style={{marginLeft:"500px",padding:"150px",color:"white"}}>Tenant Information</h2>
                    {
                        otp.map((data, index) => {
                            return <TextField
                            style={{marginTop:"-100px",left:"650px"}}
                                className='otp-field'
                                type='text'
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                required
                            />
                        })
                        
                    }

    {/* add otp here  */}
                    <p style={{marginLeft:"660px",marginTop:"-50px",color:"white",marginBottom:"10px"}}>OTP Entered - {otp.join("")}</p>
                    <p>
                        <button className="reset-button"
                        onClick={e => setOtp([...otp.map(v => "")])}>
                            Reset
                        </button>
                        <button
                            className="submit-button"
                            onClick={e =>
                                // alert("Entered OTP is " + otp.join(""))
                                
                                exportPDF()
                            }
                        >
                            Submit
                        </button>
                    </p>
        </>
    );
}

export default TenantInformation;
