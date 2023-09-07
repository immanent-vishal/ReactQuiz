import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserInputName() {

    const [userName, setUsername] = useState({
        firstname: '',
        lastname: '',
    })

    const inputHandler = (e) => {

        setUsername({
            ...userName,
            [e.target.name]: e.target.value
        })
    }

    console.log(userName);


    return (
        <>
            <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12">
                            <div class="quiz-header-title text-center">
                                <h3 class="text-center"> Let's start with your name</h3>
                                <p>We require this to generate an electronic prescription if your practitioner prescribes a treatment. </p>
                            </div>
                            <div class="quiz-body">
                                <form class="form">
                                <div class="row py-2 mb-4">
                                                <div class="col">
                                                    <label for="firstName" class="form-label">Legal First Name</label>
                                                    <input type="text" class="form-control text-box" placeholder="Jane" name="firstName"  onChange={inputHandler} required />
                                                    
                                                </div>
                                                <div class="col">
                                                    <label for="lastName" class="form-label">Legal Last Name</label>
                                                    <input type="text" class="form-control" placeholder="Doe" onChange={inputHandler} name="lastName" required />
                                                    
                                                </div>
                                </div>
                                <div class="d-grid py-2 ">
                                <Link to={'/userconcerns'} className='btn btn-block btn-black rounded-pill'><button type="button" name="agree" class="btn btn-trans" >Continue</button></Link>
                                </div>
                               
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
           
        </>
    )
}
