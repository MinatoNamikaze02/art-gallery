import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCompany = () => {
    const [name, setName] = useState('');
    const [website, setWebsite] = useState('');
    const [Companyid, setCompanyId] = useState(0);
    let history = useNavigate();

    const addCompany = () => {
        axios.post("http://localhost:3001/addCompany", {
          Company_Name: name,
          Website: website,
          id: Companyid
        }).then(() => {
            history("/company");
        });
      };

    return (
        <div>
        <div className="add">
          <label> Company Name :</label>
          <input type="text" onChange={(e) => {setName(e.target.value)}}/>
          <label> Company Website :</label>
          <input type="text" onChange={(e) => {setWebsite(e.target.value)}}/>
          <label> Company ID :</label>
          <input type="number" onChange={(e) => {setCompanyId(e.target.value)}}/>
          <button onClick={addCompany}>Submit</button>
        </div>
        </div>
    )
}

export default AddCompany
