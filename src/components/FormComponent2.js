import React, { useState } from 'react'

function FormComponent2({addUserData}) {
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
                console.log('Printing In Child');
                console.log(obj);
                addUserData(obj)
               
            }}>Submit</button>
        </div>

    </div>
  )
}

export default FormComponent2