import React, { useState  } from 'react'
import {
    MDBContainer,
    MDBBtn,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import '../App.css'
import axios from 'axios';


export default function Register() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
      const [errorMessage, setErrorMessage] = useState()
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(formData.fname)

        setFormData({
          ...formData,
          [name]: value,
        });
      };

    
      const handleSubmit = (e) => {
        console.log(e)
        console.log('hello')

        e.preventDefault();
        const newErrors = {};

        if (!formData.firstname.match(/[A-Za-z]{3,16}/)) {
          newErrors.fname = 'Invalid name! (only letters, 3-16 characters)';
        }
        if (!formData.lastname.match(/[A-Za-z]{3,16}/)) {
          newErrors.lname = 'Invalid last name! (only letters, 3-16 characters)';
        }
        if (!formData.password.match(/^.{6,16}$/)) {
          newErrors.password = 'Password is required';
        }
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          axios.post('http://localhost:5000/user', formData)
          .then((response) => {
            // console.log('Response:', response.data);
            localStorage.setItem('loggedIn', 'true')
            window.location.replace('/joinroom');
  
          })
          .catch((error) => {
            console.error('Error:', error);
            setErrorMessage(error.response.data.message);

          });
          console.log('Form submitted:', formData);
        }
      };
    




  return (
    <div>
    <Navbar></Navbar>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>

          <MDBInput
            name="firstname"
            wrapperClass="mb-4"
            label="First Name"
            id="form1"
            type="text"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          />
          {errors.fname && <p className="error-message">{errors.firstname}</p>}

          <MDBInput
            name="lastname"wrapperClass="mb-4" label="Last Name"
            id="form1"
            type="text"
            value={formData.lastname}
            onChange={handleInputChange}
            required
          />
          {errors.lname && <p className="error-message">{errors.lastname}</p>}

          <MDBInput
            name="username"
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="email"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <p className="error-message">{errors.username}</p>}

          <MDBInput
            name="password"
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <p className="error-message">{errors.password}</p>}

          <MDBBtn className="mb-4" type="submit" onClick={handleSubmit}>
            Sign Up
          </MDBBtn>
        </form>

        <div className="text-center">
          <p>
            Already a member? <Link to="/login">Login</Link>
          </p>
        </div>
        <div><p className='error-message'>{errorMessage}</p></div>

      </MDBContainer>
    </div>
  )
}
