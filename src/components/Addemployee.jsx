import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Addemployee = () => {
    const [data, setData] = useState(
        {    
            "title":"",
            "empname": "",
            
            "department": "",
            "salary": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const  readValue = () => {
        axios.post("http://localhost:8088/add",data).then(
            (response) =>{
                setData(response.data)
                if(response.data.status == "success"){
                    alert("Added Successfully")
                }else{
                    alert("error")
                }
            }
        ).catch(
            (err) =>{
                alert(err.message)
            }
        ).finally()
        
                
    }
 return (
    <div>
       <h1><center>ADD EMPLOYEE</center></h1>
             
<div>

                 <Navbar/>
                <div className="container">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                    <label htmlFor="" className="form-control">EMPNAME</label>
                                    <input type="text" className="form-control" name='empname' value={data.empname} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                    <label htmlFor="" className="form-control">EMPID</label>
                                    <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                    <label htmlFor="" className="form-control">DEPARTMENT</label>
                                    <input type="text" className="form-control" name='department' value={data.department} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-control">SALARY</label>
                                    <input type="text" className="form-control" name='salary' value={data.salary} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                    <label htmlFor="" className="form-control">SUBMIT</label>
                                    <button className="btn btn btn-success"onClick={readValue} >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    </div>
  )
}

export default Addemployee
