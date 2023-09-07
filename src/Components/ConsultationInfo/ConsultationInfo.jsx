import React from 'react'
import { Link } from 'react-router-dom'

export default function ConsultationInfo() {
    return (
        <>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12">
                        <div class="quiz-header-title">
                            <h3 class="text-center"> How your Consultation will Work</h3>
                        </div>
                        <div class="quiz-body">

                            <div class="row">
                                <div class="col-lg-12 quiz-quest-box">
                                   <div class="hdng-box">
                                     <span class="badge rounded-pill bg-primary">1</span> Online Assessment
                                    
                                    </div> 
                                    <div class="quiz-quest-body d-flex align-items-center justify-content-center">
                                        <img src="img/medical_history_icon.png" class="" alt="image" />
                                        <p>Answer Question about your medical history and see if Plot's a good fit.</p>
                                    </div>
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-lg-12 quiz-quest-box">
                                   <div class="hdng-box">
                                     <span class="badge rounded-pill bg-primary">2</span> Consult with a practitioner
                                    
                                    </div> 
                                    <div class="quiz-quest-body d-flex align-items-center justify-content-center">
                                    <img src="img/practioner_icon.png" class="" alt="image" />
                                        <p>For $20, a practitioner will assess you and if suitable, will prescribe a treatment plan.</p>
                                    </div>
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-lg-12 quiz-quest-box">
                                   <div class="hdng-box">
                                     <span class="badge rounded-pill bg-primary">3</span> Pharmacy Ships
                                    
                                    </div> 
                                    <div class="quiz-quest-body d-flex align-items-center justify-content-center">
                                    <img src="img/ship_icon.png" class="" alt="image" />
                                        <p>Confirm your treatment, and it'll ship from our pharmacy in a discreet box.</p>
                                    </div>
                                </div>                                
                            </div>
                            <div class="row">
                                <div class="col-lg-12 p-1">
                                <div class="mb-2">
                                <span>By clicking "Agree" below you confirm you have read our <a href="">Terms & Conditions</a> and <a href="">Privacy Policy.</a></span>
                                </div>
                                <div class="d-grid py-2 ">
                                <Link to={'/userinputname'} className='btn btn-block btn-black rounded-pill'><button type="button" name="agree" class="btn btn-trans" >Agree</button></Link>
                                </div>
                                </div>
                            </div>                  
                            
                            
                        </div>
                        
        

                        </div>
                    </div>
                </div>
                      
        </>
    )
}
