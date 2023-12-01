import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios'


function View() {
const {id}=useParams()
console.log(id);
const [anEmployee,setAnEmployee]=useState()
const fetchData=async()=>{
  const response=await axios.get('http://localhost:8000/getAnEmployee/'+id)
  console.log(response.data.employee);//particular employee data
  setAnEmployee(response.data.employee)


}
console.log(anEmployee);

useEffect(()=>{
  fetchData(id)
},[])

  return (
    <div>
      <div className="container">
        {
            <MDBCard className='m-5'>
      <MDBCardBody>
        <div className='text-center'>
        <MDBCardImage style={{width:'200px',height:'300px'}} src='https://icon-library.com/images/employee-icon-png/employee-icon-png-15.jpg' position='top' alt='...' />

        </div>
        <MDBCardText>
        <MDBListGroup style={{ minWidthL: '22rem' }} light className='text-center mt-3'>
        <MDBListGroupItem active noBorders aria-current='true' className='px-3'>Name:{anEmployee?.name}</MDBListGroupItem>
      <MDBListGroupItem  className='px-3'>Age:{anEmployee?.age}</MDBListGroupItem>
      <MDBListGroupItem  className='px-3'>Designation:{anEmployee?.age}</MDBListGroupItem>
      <MDBListGroupItem  className='px-3'>Salary:{anEmployee?.age}</MDBListGroupItem>
      
    </MDBListGroup>
        </MDBCardText>
       <div className='text-center'>
       <Link to={'/'}>
        <MDBBtn>Back to home</MDBBtn>

        </Link>
       </div>
      </MDBCardBody>
    </MDBCard>
        }
      </div>
    </div>
  )
}

export default View