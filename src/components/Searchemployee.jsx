import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Searchemployee = () => {
    const [data, setData] = useState(
        {
            "title": "",
        }
    )

    const [result, setResult] = useState([])

    const deleteEmployee = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8088/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.success = "success") {
                    alert("successfully deleted")

                } else {
                    alert("error")
                }
            }
        ).catch()
    }





const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
}
const readValue = () => {
    axios.post("http://localhost:8088/search", data).then((response) => {
        setResult(response.data)
    }
    ).catch(
        (error) => {
            console.log(error)
        }

    ).finally()
}


  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-control">EmpID</label>
                    <input type="text" className="form-control" name='empid' value={data.empid} onChange={inputHandler} />
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary" onClick={readValue}>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Employee name</th>
                            <th scope="col">Employee id</th>
                            <th scope="col">Department</th>
                            <th scope="col">Salary</th>
                           


                        </tr>
                    </thead>

                    <tbody>
                        {
                            result.map(
                                (value, index) => {
                                    return <tr>

                                        <td>{value.empname}</td>
                                        <td>{value.empid}</td>
                                        <td>{value.depatment}</td>
                                        <td>{value.salary}</td>
                                        
                                        <button className="btn btn-danger" onClick={() => {deleteEmployee(value._id) }}>Delete</button>
                                    </tr>
                                }
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    </div>



</div>

    </div>
  )
}

export default Searchemployee
