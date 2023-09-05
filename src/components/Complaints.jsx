import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

function Complaints() {
    const [complaints, setComplaints] = useState([]);
    const [search, setSearch] = useState(null);

    async function fetchComplaints (search) {
        try {
            const user = JSON.parse(window.localStorage.getItem('user'));
            const token = JSON.parse(window.localStorage.getItem('token'));
            let result;
            if (search) {
                result = await axios.get('http://localhost:5000/complaints?userId='+ user._id + '&search=' + search);    
            } else {
                result = await axios.get('http://localhost:5000/complaints?userId='+ user._id);    
            }
            if (result?.data?.message === 'fetched successfully') {
                setComplaints(result?.data?.data?.complaints)
            }
        } catch (e) {
            console.log(e)
            if (e?.message) {
                alert(e.message)
            }
        }
    }

    useEffect(() => {
        fetchComplaints()
    }, []);

  return (
    <>
        <div><Navbar /></div>

        <div>
        <h1 style={{color:"white",marginLeft:"790px"}}>Complaints</h1>
            <input type="text" style={{width: '200px',marginLeft:"1240px",marginRight:"20px",borderRadius:"10px"}} onChange={(e) => {
                setSearch(e.target.value)
            }}/>    
            <button style={{backgroundColor:"royalblue",width:"150px",height:"50px",marginTop:"20px",borderRadius:"30px"}} onClick={async () => {
                await fetchComplaints(search)
            }}>Search</button>
        </div>

        <TableContainer  sx={{ overflow: 'auto', marginTop: 4, maxHeight: 600, background: 'white',width:"1500px",marginLeft:"150px" }}>
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
                {(complaints.length && complaints.length > 0) ? complaints.map((complaint) => {
                    return <TableRow>
                        <TableCell>
                            {complaint.policeStation}
                        </TableCell>
                        <TableCell>
                            {complaint.fullNamepropertyowner}
                        </TableCell>
                        <TableCell>
                            {complaint.tenanatName}
                        </TableCell>
                        <TableCell>
                            {complaint.tenanatWorkmobileNumber}
                        </TableCell>
                        <TableCell>
                            {complaint.tenanatworkcityDistrict}
                        </TableCell>
                        <TableCell>
                            {complaint.tenanatworksTate}
                        </TableCell>
                    </TableRow>
                }) : null}         
            </TableBody>
          </Table>
        </TableContainer>

    </>
  );
}

export default Complaints;
