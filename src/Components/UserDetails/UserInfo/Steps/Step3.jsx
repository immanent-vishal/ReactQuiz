import React, { useState } from 'react'

export default function Step3({setStep , setUserInfo}) {





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
                                <h5 class="mb-3">Good News! Facet Can Help</h5>
                                <h2 class="mb-3">Let’s start your patient profile.</h2>
                                <p>We’ll use this information to save your responses and to create your secure account .</p>
                            </div>
                        
                <div class="quiz-body steps-form">
                <form class="form">
                <div class="mb-4">
                <label for="fisrtname" class="form-label">First Name:</label>
                    <input class="form-control"
				name='firstname'
                        type="text"
                     
                        onChange={handleInputChange}
                        required
            />
                </div>
				<div class="mb-4">
                <label for="lasttname" class="form-label">Last Name:</label>
                    <input class="form-control"
            name='lastname'
                        type="text"
                
                        onChange={handleInputChange}
                        required
            />
                </div>
				<div class="mb-4">
                <label for="email" class="form-label">Email:</label>
                    <input class="form-control"
            name='email'
                        type="email"
                     
                        onChange={handleInputChange}
                        required
            />
                </div>
				<div class="facetip mb-1">
									<h4><span class="info-icon"><i class="bi bi-info-circle-fill"></i></span>Face Tip</h4>
									<p>
										Have more than one symptom? That’s very common! Our providers can help you with a range of symptoms. Unfortunately, they won’t be able to examine or treat moles or skin growths as those require face-to-face evaluation with an appropriate medical provider. Features of suspicious lesions include but are not limited to: change in shape, size, color, or texture, symptoms (such as itching, pain, bleeding, or oozing), and stores or pimples that fail to heal within 3-4 weeks.
									</p>
				</div>
				 <div class="mb-4 agree-check">
                    <input class="form-check-input me-2" type='checkbox'/><label class="form-check-label">I agree to Facet Terms ^ Conditionns and Privacy Policy.</label>
                </div>
                <div class="d-grid py-2 ">
                <button class="btn btn-block btn-black rounded-pill py-2" onClick={() => setStep((prevState)=>prevState+1)}>Continue</button>
                </div>
                
                </form>
                </div>
                </div>
           </div>
</div>
        </>
    )
}
