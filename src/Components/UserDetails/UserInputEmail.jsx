import React from 'react'

export default function UserInputEmail() {


const [userContact , setUserContact] = useState({
   email:'',
   phone:'',
})

const inputHandler = (e)=>{

    setUsername({
      ...userContact,
        [e.target.name]:e.target.value
    })
}

console.log(userContact);


    return (
        <>
             <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12">
                            <div class="quiz-header-title text-center">
                                <h3 class="text-center"> Enter you email and phone</h3>
                                <p>Help us find or set up your account by verifying your email and phone. Referral credit is only valid for verified new patients</p>
                            </div>
                            <div class="quiz-body">
                                <form class="form">
                                <div class="mb-4">
                                                <div class="col">
                                                    <label for="userEmail" class="form-label">Email</label>
                                                    <input type="email" class="form-control text-box" placeholder="Jane" name="userEmail"  onChange={inputHandler} required />
                                                    
												</div>
								</div>
								<div class="mb-4">
                                                <div class="col">
                                                    <label for="userPhone" class="form-label">Legal Last Name</label>
                                                    <input type="text" class="form-control" placeholder="Doe" onChange={inputHandler} name="userPhone" required />
                                                    
                                                </div>
                                </div>
                                <div class="d-grid py-2 ">
                                <Link  className='btn btn-block btn-black rounded-pill'><button type="button" name="agree" class="btn btn-trans" >Continue</button></Link>
                                </div>
                               
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
