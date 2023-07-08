import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sign() {
    const [attributes, setAttributes] = useState({name:"", email:"", password:"", geolocation:""})
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:attributes.name, email:attributes.email, password:attributes.password, location:attributes.geolocation})
        });
        const json = await response.json()
        console.log(json);

        if(!json.success){
            alert("Enter valid Information")
        }
    }

    const onChange=(event)=>{
        setAttributes({...attributes,[event.target.name]:event.target.value})
    }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name='name' value={attributes.name} onChange={onChange}/>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name='email' value={attributes.email}
              onChange={onChange}
            />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name='password'
              value = {attributes.password}
              onChange={onChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name='geolocation'
              value = {attributes.geolocation}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-warning">
            Submit
          </button>
          <Link to="/Login" className="m-3 btn btn-danger">Already a user</Link>
        </form>
      </div>
    </>
  );
}
