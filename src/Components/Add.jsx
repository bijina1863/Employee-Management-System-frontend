import React, { useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'
import {  Link, useNavigate } from 'react-router-dom';


function Add() {

  const navigate=useNavigate()
  //create a state for holding values from the form fields
  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState('')

  const handleAdd=async(e)=>{

    const body={id,name,age,designation,salary}
    //Api call to add employee detaails
    await axios.post('http://localhost:8000/addEmployees',body)
    .then((response)=>{
      console.log(response);
      alert(response.data.message)
      navigate('/')

    })
    .catch((error)=>{
      alert("Enter unique employee id")
    });
    console.log(id,name,age,designation,salary);
  }

  return (
    <>
    <div className="container">
      <h3 className='text-center m-3'>Add Employee Details</h3>
      <div className="container form w-50">
      <MDBInput label='Id' onChange={(e)=>setId(e.target.value)} id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput label='Name'  onChange={(e)=>setName(e.target.value)} id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput label='Age'  onChange={(e)=>setAge(e.target.value)} id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput label='Designation'  onChange={(e)=>setDesignation(e.target.value)} id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput label='Salary'  onChange={(e)=>setSalary(e.target.value)} id='formControlLg' type='text' size='lg' />
      <br />

      <div>
      <Link to={'/'}>
        <MDBBtn style={{marginRight:'100px'}} className="text-center m-3">
        Back To Home
        </MDBBtn>
        </Link>
        <MDBBtn onClick={(e)=>handleAdd(e)} className="text-center m-3">
          Add
        </MDBBtn>
      </div>
      </div>
    </div>
    </>
  )
}

export default Add