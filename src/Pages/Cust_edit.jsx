import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { data, useNavigate, useParams } from 'react-router-dom'

const Cust_edit = () => {
      const {editId} = useParams()
      const navigate=useNavigate()
       const { register, handleSubmit, reset,setValue} = useForm()
 

        const getData=async()=>{
            const responce = await axios.get(`http://localhost:1000/cust/${editId}`)
            const result = responce.data
            setValue('name',result.name)
            setValue('mobile',result.mobile)
            setValue('email',result.email)
            setValue('address',result.address)
            
        }

        useEffect(()=>{
          getData()
        },[])


       const addData=(data)=>{
            axios.put(`http://localhost:1000/cust/${editId}`,data)
            alert(data.name + ' Edit Cust Successfully')
            reset()
            navigate('/list')
       }


  return (
    <div>

      <div className='bg-warning w-50 mx-auto p-2 mt-5'> 
          <b>Edit Customer Detalis</b>
          <form onSubmit={handleSubmit(addData)}>
          <div className='mt-2'>
            <input type='text' placeholder='Enter Customer Name' className='form-control' {...register('name')}/>
          </div>
           <div className='mt-2'>
            <input type='text' placeholder='Enter Customer Mobile' className='form-control' {...register('mobile')} />
          </div>
           <div className='mt-2'>
            <input type='text' placeholder='Enter Customer Address' className='form-control' {...register('address')} />
          </div>
           <div className='mt-2'>
            <input type='text' placeholder='Enter Customer Email' className='form-control'{...register ('email')} />
          </div>
          <div  className='mt-2'>
             <button className='btn btn-success'>Edit Cust </button>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Cust_edit
