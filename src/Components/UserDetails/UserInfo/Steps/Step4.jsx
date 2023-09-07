import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Step4({setUserInfo}) {

const navigate = useNavigate();

    const handleInputChange = (event) => {
        setUserInfo((prevState)=>{
            return {
              ...prevState,
                [event.target.name]: event.target.value
            }
        })

    };

  return (
    
    <>
   <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12">
                            <div class="quiz-header-title mb-3">
                            <p>Your Profiles Is Almost Complete!</p>
                                <h2 class="mb-5">Let’s complete your profile information</h2>
                                
                            </div>
                        
                <div class="quiz-body">
                <form class="form">
                <div class="mb-4 steps-form">
                <label for="fisrtname" class="form-label">Password:</label>
                    <input class="form-control"
				type="password"
               name='password'
                onChange={ handleInputChange}
                required
            />
			<span class="fs-sm">Minimum of 8 characters, including at least 3 of the 4 following types of characters: a lower-case letter, an upper-case letter, a number a special character. </span>
                </div>
				<div class="mb-4">
                <label for="lasttname" class="form-label">Sex assigned at birth:</label>
                <select class="form-select form-select-lg mb-3" name='sex' onChange={ handleInputChange}>
						<option value="">Select One</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
				</div>
				<div class="facetip mb-1">
									<h4><span class="info-icon"><i class="bi bi-info-circle-fill"></i></span>Face Tip</h4>
									<p>
										We use information like the state you live in and your birthday to make sure Facet can treat you. Next, you'll create a patient profile and answer more questions about your symptoms.
									</p>
				</div>
				 
                <div class="d-grid py-2 ">
                <button class="btn btn-block btn-black rounded-pill py-2" onClick={()=>{

                        navigate("/usersymdetails")


                }}>Continue Consultation</button>
                </div>
                
                </form>
                </div>
                </div>
           </div>
</div>
</>


  )
}
