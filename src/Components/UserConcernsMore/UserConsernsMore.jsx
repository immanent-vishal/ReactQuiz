import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserConsernsMore() {

    let userCheckOptions = [
        { id: 1, option: "Red Or Discolored skin", isTrue: false },
        { id: 2, option: "Dry, rough, flaking, or scaling skin", isTrue: false },
        { id: 3, option: "Inflamed, irrited, or painful skin" },
        { id: 4, option: "Other", type: 'other', isTrue: false },
        { id: 5, option: "Itchy skin", isTrue: false },
        { id: 6, option: "Cracking, bleeding, or oozing skin", isTrue: false }

    ]


    const [userInputCheckData, setUserInputCheckData] = useState(userCheckOptions);

    console.log(userInputCheckData);
    return (

        <>

<div class="container py-5 h-100">
				   <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12">
                            <div class="quiz-header-title">
							<h4>Tell us more. Which skin symptoms do you typically experience?</h4>
							<p>
							Select all that apply.
							</p>

							</div>
							<div class="quiz-body">
                                <form class="form">
                                <div class="mb-4">
									{
										userInputCheckData.map((item, index) => {
											return (
												<div class="check-box-wrap" key={index}>
													<input class="form-check-input"
														type="checkbox"
														id={item.id}
														name={item.option}
														value={item.isTrue}
														checked={item.isTrue}
														
														onChange={(e) => {
															let newArray = [...userInputCheckData];


															newArray[index].isTrue = !newArray[index].isTrue
															setUserInputCheckData(newArray);
														}}
													/>
													<label class="form-check-label" htmlFor={item.id}>{item.option}</label>
												</div>
											)
										})
									}
								</div>
								<div class="facetip mb-1">
									<h4><span class="info-icon"><i class="bi bi-info-circle-fill"></i></span>Face Tip</h4>
									<p>
										Have more than one symptom? That’s very common! Our providers can help you with a range of symptoms. Unfortunately, they won’t be able to examine or treat moles or skin growths as those require face-to-face evaluation with an appropriate medical provider. Features of suspicious lesions include but are not limited to: change in shape, size, color, or texture, symptoms (such as itching, pain, bleeding, or oozing), and stores or pimples that fail to heal within 3-4 weeks.
									</p>
								</div>
								<div class="d-grid py-2 ">
                                <Link to={'/userinfo'} class='btn btn-block btn-black rounded-pill'><button type="button" name="next" class="btn btn-trans" >next</button></Link>
                                </div>
                               
                                </form>
                            </div>
                        </div>
                    </div>
				
            </div>

        </>
    )
}
