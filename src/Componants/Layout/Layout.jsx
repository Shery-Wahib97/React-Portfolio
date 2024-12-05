import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './Layout.css'

export default function Layout() {

    const [active, setActive] = useState('home');


    const activeLi = (link) => {
        setActive(link);
        
    };

    const getClassName = (link) => {
        return  `side-item ${active === link ? 'active' : ''}`;
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <nav className="navbar fixed-top">
                            <div className="container-fluid">
                                <button  className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className='offcanvas offcanvas-start' tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                                        <button  type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div className="sidebar px-4 py-5 text-center">
                                            <div className="image"></div>
                                            <h1><Link className='hLink' to='home'>Jackson Ford</Link></h1>
                                            <p className='pSide'><Link className='pLink'>ui/ux designer</Link> in philippines</p>
                                            <ul className="sidebar-list">
                                                <li className={getClassName('home')}>
                                                    <Link onClick={()=>activeLi('home')} className="side-link" to='home' >Home</Link>
                                                </li>
                                                <li className={getClassName('about')}>
                                                    <Link onClick={()=>activeLi('about')}  className="side-link" to='about'>About</Link>
                                                </li>
                                                <li className={getClassName('experiance')}>
                                                    <Link onClick={()=>activeLi('experiance')}  className="side-link" to='experiance'>Experiance</Link>
                                                </li>
                                                <li className={getClassName('skills')}>
                                                    <Link onClick={()=>activeLi('skills')}  className="side-link" to='skills'>Skills</Link>
                                                </li>
                                                <li className={getClassName('work')}>
                                                    <Link onClick={()=>activeLi('work')} className="side-link" to='work'>Work</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="sidebar side-out px-4 py-5 text-center">
                            <div className="image"></div>
                            <h1><Link className='hLink' to='home'>Jackson Ford</Link></h1>
                            <p className='pSide'><Link className='pLink'>ui/ux designer</Link> in philippines</p>
                            <ul className="sidebar-list">
                                <li className={getClassName('home')}>
                                    <Link onClick={()=>activeLi('home')}  className="side-link" to='home' >Home</Link>
                                </li>
                                <li className={getClassName('about')}>
                                    <Link onClick={()=>activeLi('about')}  className="side-link" to='about'>About</Link>
                                </li>
                                <li className={getClassName('experiance')}>
                                    <Link onClick={()=>activeLi('experiance')}  className="side-link" to='experiance'>Experiance</Link>
                                </li>
                                <li className={getClassName('skills')}>
                                    <Link onClick={()=>activeLi('skills')}  className="side-link" to='skills'>Skills</Link>
                                </li>
                                <li className={getClassName('work')}>
                                    <Link onClick={()=>activeLi('work')} className="side-link" to='work'>Work</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10"><Outlet/></div>
                </div>
            </div>

        </>
    )
}