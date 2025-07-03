import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Cust_list = () => {

    // const{deleteId}= useParams()
    
    const [cust,setcust] = useState([])


      const getData=async()=>{
        const responce =await axios.get('http://localhost:1000/cust')
        const data = responce.data
       setcust(data)
      }

      useEffect(()=>{
          getData()
      },[])
  return (
    <div><div>
        <b>Customer List </b><NavLink to={`/`}><button className='btn btn-primary mb-3 mt-3'>Add New Cust</button></NavLink>
        <table border={2} className='w-50 mx-auto table table-bordered'>
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {
                   cust.map((item,index)=>(

                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.address}</td>
                        <td>
                            <NavLink to={`/list/delete/${item.id}`}>
                               <button className='btn btn-danger'>
                                Delete
                               </button>
                            </NavLink>
                             <NavLink to={`/list/edit/${item.id}`}>
                               <button className='btn btn-success ms-2'>
                                Edit
                               </button>
                            </NavLink>
                        </td>
                    </tr>
                    
                   ))
                }
            </tbody>
        </table>
     </div>
    </div>
  )
}

export default Cust_list
