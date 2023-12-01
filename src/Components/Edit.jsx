import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';


function Edit() {

  const {id}=useParams()
  console.log(id);//particular id
  
  const location=useNavigate()

  const [anEmployee,setAnEmployee]=useState()
  //create a state for all items in employee object
  const [empid,setEmpId]=useState('')
  const [empname,setEmpName]=useState('')
  const [empage,setEmpAge]=useState('')
  const [empdesignation,setEmpDesignation]=useState('')
  const [empsalary,setEmpSalary]=useState('')


  //to get particular id details
  const fetchData=async()=>{
    const response=await axios.get('http://localhost:8000/getAnEmployee/'+id)
    console.log(response.data.employee);//particular employee data
    setAnEmployee(response.data.employee)
    setEmpId(response.data.employee.id)
    setEmpName(response.data.employee.name)
    setEmpAge(response.data.employee.age)
    setEmpDesignation(response.data.employee.designation)
    setEmpSalary(response.data.employee.salary)


  }
  console.log(anEmployee);

  const handleUpdate=async()=>{
    //api call update particular employee
    const body={
      id:empid,
      name:empname,
      age:empage,
      designation:empdesignation,
      salary:empsalary
    }
    const result=await axios.post('http://localhost:8000/updateAnEmployee/'+id,body)
    console.log(result);
    alert(result.data.message)
    location('/')
  }

  useEffect(()=>{
    fetchData(id)
  },[])

  return (
    <>
    <div className="container">
      <h3 className='text-center m-3'>Update Employee Details</h3>
      <div className="container form w-50">
      <MDBInput value={empid} onChange={(e)=>setEmpId(e.target.value)} label='Id'  id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput value={empname}  onChange={(e)=>setEmpName(e.target.value)} label='Name'   id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput value={empage}  onChange={(e)=>setEmpAge(e.target.value)}  label='Age'  id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput value={empdesignation}  onChange={(e)=>setEmpDesignation(e.target.value)}  label='Designation'   id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput value={empsalary}  onChange={(e)=>setEmpSalary(e.target.value)} label='Salary'   id='formControlLg' type='text' size='lg' />
      <br />

      <div className='my-5'>
        <Link to={'/'}>
        <MDBBtn style={{marginRight:'100px'}} className="text-center m-3">
        Back To Home
        </MDBBtn>
        </Link>
        <MDBBtn onClick={(e)=>handleUpdate(e)} className="text-center m-3">
          Update
        </MDBBtn>
      </div>
      </div>
    </div>
    </>
  )
}

export default Edit