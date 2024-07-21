import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Work.css'
export default function Work() {

    const [activee, setActivee] = useState('Graphic-Design');

    const actLi = (link) => {
        setActivee(link);
    };

    const getClName = (link) => {
        return `list-group-item work-li ${activee === link ? 'activee' : ''}`;
    };

    return (
        <>
            <div className="container my-5 ">
                <p className='s-title' >Experiance</p>
                <h2 className='l-title'>WORK EXPERIENCE</h2>

                <ul className="list-group list-group-horizontal">
                    <li className={getClName('Graphic-Design')} style={{ border: "none" }}>
                        <Link onClick={() => actLi('Graphic-Design')} className='link' to={"#"}>Graphic Design</Link>
                    </li>
                    <li className={getClName('Apps')} style={{ border: "none" }}>
                        <Link onClick={() => actLi('Apps')} className='link' to={"#"}>Apps</Link>
                    </li>
                    <li className={getClName('Software')} style={{ border: "none" }}>
                        <Link onClick={() => actLi('Software')} className='link' to={"#"}>Software</Link>
                    </li>
                </ul>

                <div className="row">
                    <div className="col-md-6">
                        <div className="all-card" style={{backgroundImage: `url(/imgs/img-1-C4nS0eD8.jpg)`}}>
                            <div className="desc pt-4">
                                <div className="con">
                                    <h3><Link className='h3-link' to="work.html">Work 02</Link></h3>
                                    <span>Animation</span>
                                    <p class="icon">
                                        <span><Link className='card-link' to="#"><i className="fa-solid fa-share-nodes"></i></Link></span>
                                        <span><Link className='card-link' to="#"><i className="fa-regular fa-eye"></i> 100</Link></span>
                                        <span><Link className='card-link' to="#"><i className="fa-regular fa-heart"></i> 49</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="all-card" style={{backgroundImage: `url(/imgs/img-2-D-4H1m4L.jpg)`}}>
                            <div className="desc pt-4">
                                <div className="con">
                                    <h3><Link className='h3-link' to="work.html">Work 02</Link></h3>
                                    <span>Animation</span>
                                    <p class="icon">
                                        <span><Link className='card-link' to="#"><i className="fa-solid fa-share-nodes"></i></Link></span>
                                        <span><Link className='card-link' to="#"><i className="fa-regular fa-eye"></i> 100</Link></span>
                                        <span><Link className='card-link' to="#"><i className="fa-regular fa-heart"></i> 49</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="all-card" style={{backgroundImage: `url(/imgs/img-3-pR2ZEVY9.jpg)`}}>
                            <div className="desc pt-4">
                                <div className="con">
                                    <h3><Link className='h3-link' to="work.html">Work 02</Link></h3>
                                    <span>Animation</span>
                                    <p class="icon">
                                        <span><Link className='card-link' to="#"><i className="fa-solid fa-share-nodes"></i></Link></span>
                                        <span><Link className='card-link' to="#"><i className="fa-regular fa-eye"></i> 100</Link></span>
                                        <span><Link className='card-link' to="#"><i className="fa-regular fa-heart"></i> 49</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="all-card" style={{backgroundImage: `url(/imgs/img-4-tHccITd-.jpg)`}}>
                            <div className="desc pt-4">
                                <div className="con">
                                    <h3><Link className='h3-link' to="work.html">Work 02</Link></h3>
                                    <span>Animation</span>
                                    <p class="icon">
                                        <span><Link className='card-link' to="#"><i className="fa-solid fa-share-nodes"></i></Link></span>
                                        <span><Link className='card-link' to="#"><i className="fa-regular fa-eye"></i> 100</Link></span>
                                        <span><Link className='card-link' to="#"><i className="fa-regular fa-heart"></i> 49</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className='p-button'>
                    <button className="btn btn-primary showMoreButton"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false"
                        aria-controls="collapseExample">
                        Show More
                    </button>
                </p>

                <div className="collapse" id="collapseExample">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="all-card" style={{backgroundImage: `url(/imgs/img-5-lAucr__a.jpg)`}}>
                                <div className="desc pt-4">
                                    <div className="con">
                                        <h3><Link className='h3-link' to="work.html">Work 02</Link></h3>
                                        <span>Animation</span>
                                        <p class="icon">
                                            <span><Link className='card-link' to="#"><i className="fa-solid fa-share-nodes"></i></Link></span>
                                            <span><Link className='card-link' to="#"><i className="fa-regular fa-eye"></i> 100</Link></span>
                                            <span><Link className='card-link' to="#"><i className="fa-regular fa-heart"></i> 49</Link></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="all-card" style={{backgroundImage: `url(/imgs/img-6-DFW03AZ3.jpg)`}}>
                                <div className="desc pt-4">
                                    <div className="con">
                                        <h3><Link className='h3-link' to="work.html">Work 02</Link></h3>
                                        <span>Animation</span>
                                        <p class="icon">
                                            <span><Link className='card-link' to="#"><i className="fa-solid fa-share-nodes"></i></Link></span>
                                            <span><Link className='card-link' to="#"><i className="fa-regular fa-eye"></i> 100</Link></span>
                                            <span><Link className='card-link' to="#"><i className="fa-regular fa-heart"></i> 49</Link></span>
                                        </p>
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
