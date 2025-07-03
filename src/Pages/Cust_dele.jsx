import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Cust_dele = () => {
    const {deleteId} = useParams()
    const navigate = useNavigate()
    const [cust,setcust] = useState([])

    const DeleteData=async()=>{
        const responce =await axios.get(`http://localhost:1000/cust/${deleteId}`)
        const result = responce.data;
        setcust(result)

    }

    useEffect(()=>{
         DeleteData()
    },[])

    const fDelete=()=>{
        axios.delete(`http://localhost:1000/cust/${deleteId}`)
        alert('Delete Data')
        navigate(`/list`)

    }
  return (
    <div>
      Final Delete cust
      <h2>
        {cust.name}<br/>
        {cust.mobile}
      </h2>
      <NavLink to={`/list`}>
        <button className='btn btn-success'>No</button>
      </NavLink>

      
        <button onClick={fDelete} className='btn btn-danger ms-3'>Yes</button>
    
    </div>
  )
}

export default Cust_dele
