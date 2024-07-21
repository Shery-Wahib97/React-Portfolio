import React from 'react';
import './Skills.css'

export default function Skills() {
    return (
        <>
            <div className="skills container py-5 ">
                <p className="skillsTitle s-title">MY SPECIALTY</p>
                <h2 className="skillsHeading l-title">MY SKILLS</h2>
                <p className="skillsText">The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
                    wild Question Marks and devious Semikoli, but the Little Blind Text didn't
                    listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="mb-2 progTitle">Photoshop</h3>
                        <span className='percentage'></span>
                        <div className="proClr1 progress">
                            <div role="progressbar" className="progress-bar" aria-valuenow="75%" aria-valuemin="0" aria-valuemax="100%" style={{width: "75%"}}></div>
                        </div>
                        <h3 className="mb-2 progTitle">HTML5</h3>
                        <span className='percentage'></span>
                        <div className="proClr2 progress">
                            <div role="progressbar" className="progress-bar" aria-valuenow="85%" aria-valuemin="0" aria-valuemax="100%" style={{width: "85%"}}></div>
                        </div>
                        <h3 className="mb-2 progTitle">WordPress</h3>
                        <span className='percentage'></span>
                        <div className="proClr3 progress">
                            <div role="progressbar" className="progress-bar" aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100%" style={{width: "70%"}}></div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h3 className="mb-2 progTitle">jQuery</h3>
                        <span className='percentage'></span>
                        <div className="proClr4 progress">
                            <div role="progressbar" className="progress-bar " aria-valuenow="60%" aria-valuemin="0" aria-valuemax="100%" style={{width: "60%"}}></div>
                        </div>
                        <h3 className="mb-2 progTitle">CSS3</h3>
                        <span className='percentage'></span>
                        <div className="proClr5 progress">
                            <div role="progressbar" className="progress-bar" aria-valuenow="90%" aria-valuemin="0" aria-valuemax="100%" style={{width: "90%" }}></div>
                        </div>
                        <h3 className="mb-2 progTitle">SEO</h3>
                        <span className='percentage'></span>
                        <div className="proClr6 progress">
                            <div role="progressbar" className="progress-bar" aria-valuenow="80%" aria-valuemin="0" aria-valuemax="100%" style={{width: "80%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
