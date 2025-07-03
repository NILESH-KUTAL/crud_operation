import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

const Add_cust = () => {
    
       useForm()
       const { register, handleSubmit, reset, formState:{errors} } = useForm()

       const addData=(data)=>{
            axios.post('http://localhost:1000/cust',data)
            alert(data.name + ' Done')
            reset()
       }


  return (
    <div>

      <div className='bg-warning w-50 mx-auto p-2 mt-5'> 
          <b>Add Customer Detalis</b><NavLink to={`/list`}><button className='btn btn-warning'>Open Customer List</button></NavLink>
          <form onSubmit={handleSubmit(addData)}>
          <div className='mt-2'>
            <input type='text' placeholder='Enter Customer Name' className='form-control' {...register('name',{
                required : 'Name is Required',
                pattern :{
                    value:/^[A-Za-z/s]+$/,
                    message:'Only Letter And No Space allowed'
                }
            })
            }/>
            {
                errors.name && <b>{errors.name.message}</b>
            }
          </div>
           <div className='mt-2'>
            <input type='text' placeholder='Enter Customer Mobile' className='form-control' {...register('mobile',
                {
                    required :'Phone Number must br Requird',
                    pattern :{
                        value : /^[6-9]\d{9}$/,
                        message : 'Only Number (10)'
                    }
                }
            )} />

            {
                errors.mobile && <b>{errors.mobile.message}</b>
            }
          </div>
           <div className='mt-2'>
            <input type='text' placeholder='Enter Customer Address' className='form-control' {...register('address',
                {
                    required : 'Address Requird',
                    pattern:
                    {
                        value :/^[A-Za-z]+$/,
                        message : 'only letter '
                    }
                }
            )} />
            {
                errors.address && <b>{errors.address.message}</b>
            }
          </div>
           <div className='mt-2'>
            <input type='text' placeholder='Enter Customer Email' className='form-control'{...register ('email')} />
          </div>
          <div  className='mt-2'>
             <button className='btn btn-success'>Add Emp</button>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Add_cust
