import React, { useState } from 'react'

function FormComponent() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  return (
    <div className='border w-25 mt-5 p-4'>
        <h2 className='text-primary text-center'>Login Form</h2>
        <div className='mt-3'>
            <label>Email</label>
            <input type='email' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className='mt-3'>
            <label>Password</label>
            <input type='password' className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>

        <div className='mt-3'>
            <button className='btn btn-primary w-100' onClick={()=>{
                console.log("Email : ",email);
                console.log("Password : ",password);
            }}>Submit</button>
        </div>

    </div>
  )
}

export default FormComponent