import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Login() {
  const [attributes, setAttributes] = useState({ email: "", password: "" });
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: attributes.email,
        password: attributes.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid Information");
    }
    if (json.success) {
      localStorage.setItem("userEmail", attributes.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
  };

  const onChange = (event) => {
    setAttributes({ ...attributes, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={attributes.email}
              onChange={onChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={attributes.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-warning">
            Submit
          </button>
          <Link to="/ahaaram/src/pages/Sign.js" className="m-3 btn btn-danger">
            I'm a new user
          </Link>
        </form>
      </div>
    </>
  );
}
