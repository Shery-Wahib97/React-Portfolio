import React from 'react'
import "./Experiance.css"

export default function Experiance() {
    return (
        <>
            <div className="container my-5 ">
                <p className='s-title' >Experiance</p>
                <h2 className='l-title'>WORK EXPERIENCE</h2>
                <ul className="experiance-list">

                    <li className="experience experience1">
                        <div className="icon">
                            <i class="fa-solid fa-pencil"></i>
                        </div>
                        <div className="ex-text">
                            <h2>
                                <a href="#">Full Stack Developer </a>
                                <span>2017-2018</span>
                            </h2>
                            <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise.
                                Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                        </div>
                    </li>

                    <li className="experience experience2">
                        <div className="icon bg-danger">
                            <i class="fa-solid fa-pencil"></i>
                        </div>
                        <div className="ex-text">
                            <h2>
                                <a href="#">Front End Developer at Google Compan </a>
                                <span>2017-2018</span>
                            </h2>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day
                                however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                    </li>

                    <li className="experience experience3">
                        <div className="icon bg-warning">
                            <i class="fa-solid fa-pencil"></i>
                        </div>
                        <div className="ex-text">
                            <h2>
                                <a href="#">System Analyst </a>
                                <span>2017-2018</span>
                            </h2>
                            <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise.
                                Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                        </div>
                    </li>

                    <li className="experiance end">
                        <div className="end"></div>
                    </li>
                </ul>
            </div>
            
        </>
    )
}
