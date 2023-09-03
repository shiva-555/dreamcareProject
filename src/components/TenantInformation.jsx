import { TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import "../components/TenantInformation.css"
import { formContext } from '../App'
import {Html} from 'react-pdf-html'
import {Document, Page} from 'react-pdf'
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';


const TenantInformation = () => {
    const {inputs, setInputs} = useContext(formContext)

    //  Otp Generation

    function getData () {
        let html = []
        for (let key in inputs) {
            if (key === 'mobileNumber') {
                fetch('http://localhost:5000/otp?number=' + inputs[key])
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
                    <h1>Tenant complaint form</h1>
                        {Object.keys(inputs).map((key) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{inputs[key]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            );
        }

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


      <TableContainer  sx={{ overflow: 'auto', marginTop: 4, maxHeight: 600, background: 'white' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead style={{ backgroundColor: "#243c80", background: "white" }}>

              <TableRow
                sx={{
                  "& th": {
                    borderBottom: "2px solid black",
                    fontSize: "0.9rem",
                    color: "white",
                    backgroundColor: "#243c80",
                    borderLeft: "1px solid #3b4864",
                    height: '1px'
                  }
                }}
              >
                <TableCell style={{ fontWeight: 500, fontSize: "15px", color: "white" }}>Police Station Name</TableCell>
                <TableCell style={{ fontWeight: 500, fontSize: "15px", color: "white" }}>Property Owner Name</TableCell>
                <TableCell style={{ fontWeight: 500, fontSize: "15px", color: "white" }}>Tenanat Name</TableCell>
                <TableCell style={{ fontWeight: 500, fontSize: "15px", color: "white" }}>Tenanat Mobile Number</TableCell>
                <TableCell style={{ fontWeight: 500, fontSize: "15px", color: "white" }}>Tenanat City</TableCell>
                <TableCell style={{ fontWeight: 500, fontSize: "15px", color: "white" }}>Tenanat State</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              
              <TableRow hover
                 >
                  <TableCell>{}</TableCell>
                  <TableCell>{}</TableCell>
                  <TableCell>{}</TableCell>
                  <TableCell>{}</TableCell>
                </TableRow>
           
         
            </TableBody>
          </Table>
        </TableContainer>
        </>
    );
}

export default TenantInformation;
