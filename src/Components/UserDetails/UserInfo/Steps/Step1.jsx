import React, { useState } from 'react'

export default function Step1({ setStep ,setUserInfo }) {


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
                            <div class="quiz-header-title mb-5">
                                <h5 class="mb-3">LET'S SEE IF FACET IS A FIT FOR YOU.</h5>
                                <h2 class="mb-3">Which state do you live in?</h2>
                                <p>We'll use this to connect you with a provider licensed in your state and ensure our pharmacy can ship treatments to you.</p>
                            </div>
                        
                <div class="quiz-body">
                <form class="form">
                <div class="mb-4">
                <label for="country" class="form-label">State</label>
                    <select class="form-select form-select-lg mb-3" name='country'  onChange={handleInputChange}>
                   
                        <option value="">Select</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        {/* Add more countries as needed */}
                    </select>
                </div>
                <div class="d-grid py-2 ">
                <button class="btn btn-block btn-black rounded-pill py-2" onClick={() => setStep((prevState) => prevState + 1)}>Continue</button>
                </div>
                
                </form>
                </div>
                </div>
            </div>
            </div>
        
        </>
    )
}
