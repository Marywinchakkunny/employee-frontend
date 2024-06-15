import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [data, changeData] = useState([])
    const fetchData = () =>{
      axios.get("http://localhost:8088/view").then(
      (response) => {
          changeData(response.data)
      }
  ).catch(
      (error)=>{
          console.log(error.message)
          alert(error.message)
      }
  ).finally()
}
useEffect(()=>{fetchData()},[])
  return (
    <div>
     <h1><center>View Employee Details</center></h1>
      <Navbar/>
      <div class="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table" border="2" >
              <thead>
                <tr>
                  <th scope="col">empname</th>
                  <th scope="col">empid</th>
                  <th scope="col">department</th>
                  <th scope="col">salary</th>
                </tr>
              </thead>
              <tbody>
                {data.map(
                  (value,index) =>
                     {
                    return <tr>
                      <td>{value.empname}</td>
                      <td>{value.title}</td>
                      <td>{value.department}</td>
                      <td>{value.salary}</td>
                    </tr>
                  }
                
              )}
             </tbody>
                
              
              
          
            </table>
          </div>
        </div>
      </div>

    </div>  
    
  )
}

export default Viewall
