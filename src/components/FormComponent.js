import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addWeight } from '../slices/UserSlice';

function FormComponent({addUserData}) {
    const dispatch = useDispatch();

    const [weight,setWeight] = useState(0);
    const [date,setDate] = useState('')

  return (
    <div className='border  mt-5 p-4'>
        <h2 className='text-primary text-center'>Add Details</h2>
        <div className='mt-3'>
            <label>Weight</label>
            <input type='number' className='form-control' value={weight} onChange={(e)=>{setWeight(parseInt(e.target.value))}}/>
        </div>

        <div className='mt-3'>
            <label>Date</label>
            <input type='date' className='form-control' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
        </div>

        <div className='mt-3'>
            <button className='btn btn-primary w-100' onClick={()=>{
                const obj = {Weight:weight,Date:date}
                dispatch(addWeight(obj));
               
            }}>Submit</button>
        </div>

    </div>
  )
}

export default FormComponent