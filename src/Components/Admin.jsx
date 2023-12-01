import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Admin() {

  const [allEmployees,setAllEmployees]=useState([])
  //data fetching function
  const fetchData=async()=>{
    const  response=await axios.get('http://localhost:8000/getEmployees')
    console.log(response.data.employee);
    setAllEmployees(response.data.employee)
  }
  console.log(allEmployees);


  const deleteEmp=async(id)=>{
    const response=await axios.delete('http://localhost:8000/deleteEmployee/'+id)
    console.log(response);
    alert(response.data.message)
    fetchData()
  }
  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div>
        <div className="container">
            <h3 className='text-center m-3'>Employee Management System</h3>
        <p style={{textAlign:'justify'}}>An employee management system, also known as EMS, is software designed to assist the HR department in managing and monitoring employee-related tasks and information. This blog post will shed light on what an employee management System is, its significance for businesses, and why you need to implement it.

        </p>

    <div className='text-end'>
<Link to={'add'}>
<MDBBtn style={{margin:'20px'}}><i className='fa-solid fa-user-plus'></i> Add </MDBBtn>

</Link>
    </div>

        <div className="table">
        <MDBTable className='my-5'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Action</th>


        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
        allEmployees.map((item)=>(
          <tr className='table-active'>
          <th scope='row'>{item.id}</th>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
          <td>{item.salary}</td>
          <td>
            <div>
              <Link to={'/edit/'+item.id}>
              <MDBBtn className='mx-5'><i className='fa-solid fa-pen'></i></MDBBtn>

              </Link>

              <Link to={'/view/'+item.id}>
              <MDBBtn className='mx-5'><i className='fa-solid fa-eye'></i></MDBBtn>

              </Link>
              
                <MDBBtn onClick={()=>deleteEmp(item.id)} className='ms-5'><i className='fa-solid fa-trash'></i></MDBBtn>

            </div>
          </td>
        </tr>
        ))
      }
       
      </MDBTableBody>
    </MDBTable>
        </div>
        </div>
    </div>
  )
}

export default Admin