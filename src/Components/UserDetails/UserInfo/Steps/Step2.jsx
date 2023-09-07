import React, { useState } from 'react'

export default function Step2({setStep , setUserInfo}) {




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
                                <h5 class="mb-3">YOUR STATE IS COVERED BY FACET!</h5>
                                <h2 class="mb-3">What's your date of birth?</h2>
                                <p>Facet can only treat patients who are over 18 at this time.</p>
                            </div>
                        
                            <div class="quiz-body">
                                    <form class="form">
                                    <div class="mb-4">
                                    <label for="dob" class="form-label">Date of birth</label>
                                        <input class="form-control"
                                name='dob'
                                    type="date"
                            
                                    onChange={handleInputChange}
                                    required
                                />
                                    </div>
                                    <div class="d-grid py-2 mb-5 ">
                                    <button class="btn btn-block btn-black rounded-pill py-2" onClick={() => setStep((prevState)=>prevState+1)}>Continue</button>
                                    </div>
                                    <div class="facetip mb-1">
									<h4><span class="info-icon"><i class="bi bi-info-circle-fill"></i></span>Face Tip</h4>
									<p>
                                    We use information like the state you live in and your birthday to make sure Facet can treat you. Next, you'll create a patient profile and answer more questions about your symptoms.
									</p>
								</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
</>
  )
}
