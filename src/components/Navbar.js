import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../pages/Cart';
import { useCart } from './Context';
export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fw-bold fst-italic" to="/" style={{"font-family" : "VerveineW01-Regular"}}>Ahaaram</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className='navbar-nav me-auto mb-2'>
              <li>
              <Link className="nav-link active fs-4 fst-italic" aria-current="page" to="/" style={{"font-family" : "VerveineW01-Regular"}}>Home</Link>
              </li>
              {(localStorage.getItem("authToken"))?
              <li>
              <Link className="nav-link active fs-4 fst-italic" aria-current="page" to="/" style={{"font-family" : "VerveineW01-Regular"}}>My Orders</Link>
              </li>:""
              }
            </ul>
            {(!localStorage.getItem("authToken"))?
            <div className="d-flex">
                
                <Link className="btn bg-white text-warning mx-1" to="/login">Log In</Link>
                <Link className="btn bg-white text-warning mx-1" to="/ahaaram/src/pages/Sign.js">Sign Up</Link>
            </div>
            :
            <div>
            <div className='btn bg-white text-danger mx-2' onClick={()=>{setCartView(true)}}>
                My Cart {"  "}
                <Badge pill bg ="warning">{data.length}</Badge>
              </div>
              {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
              <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                Log Out
              </div>
            </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}
