import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserConserns() {

    let userCheckOptions = [
        { id: 1, option: "Eczema (a.k.a. atopic dermatitis)", isTrue: false },
        { id: 2, option: "Dandruff (a.k.a. seborrheic dermatitis)", isTrue: false },
        { id: 3, option: "Psoriasis" }, { id: 4, option: "Other", type: 'other', isTrue: false },
        { id: 4, option: "I'm not sure, but want help with my irritated, red, or itchy skin", type: 'unknown', isTrue: false }
    ]

    const [userInputCheckData, setUserInputCheckData] = useState(userCheckOptions);


    console.log(userInputCheckData);
    return (
        <>
            <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12">
                            <div class="quiz-header-title text-center">
                                <h3 class="text-center"> Facet specializes in several skin concerns. What are you looking for help with today?</h3>
                                <p>Our derm experts are here for you. Select all that apply so we can tailor this consultation to your unique needs.</p>
                            </div>
                <div class="quiz-body">
                 <form class="form">
                <div class="mb-4">
                    <div class="col">
                    {
                        userInputCheckData.map((item, index) => {
                            return (
                                <div class="check-box-wrap " key={index}>
                                    <input class="form-check-input"
                                        type="checkbox"
                                        id={item.id}
                                        name={item.option}
                                        value={item.isTrue}
                                        checked={item.isTrue}
                                        onChange={(e) => {
                                            let newArray = [...userInputCheckData];


                                            if (newArray[index].type === 'unknown') {

                                                newArray.forEach((item) => {
                                                    if (item.type !== 'unknown') {
                                                        item.isTrue = false;
                                                    }


                                                })
                                            }

                                            newArray[index].isTrue = !newArray[index].isTrue
                                            setUserInputCheckData(newArray);
                                        }
                                        }
                                    />
                                    <label class="form-check-label" htmlFor={item.id}>{item.option}</label>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
                <div class="d-grid py-2 ">
               
                <Link to={'/userconcernsmore'} className='btn btn-block btn-black rounded-pill'><button type="button" name="agree" class="btn btn-trans" >Continue</button></Link>
                </div>
               </form>
            </div>
        </div>

            </div>
     </div>
        </>
    )
}
