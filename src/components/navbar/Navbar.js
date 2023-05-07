import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import logo from '../../images/logo.png'
import user from '../../images/user-small.png'

function TopNavbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid mt-2">
                <div className="d-flex flex-row col-md-12 p-0">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="profileMenu" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="col-md-1 p-0 ms-3">
                        <a className="navbar-brand" href="/">
                            <img src={logo} width="60" height="60" className="d-inline-block align-top"
                                 alt=""/>
                        </a>
                    </div>


                    <div className="col-md-10 text-center">
                        <span className="h2 text-white">Bucket Listing</span>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-list-4">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                   role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img
                                        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                                        width="40" height="40" className="rounded-circle"/>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Dashboard</a>
                                    <a className="dropdown-item" href="#">Edit Profile</a>
                                    <a className="dropdown-item" href="#">Log Out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown open">
                        <a className="btn border-none dropdown-toggle text-white" type="button" id="triggerId2" data-bs-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false">
                            <i className='bi bi-person f5-4'></i>
                            <span className='f5-4 ms-3 d-none d-sm-inline'>Dropdown</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="triggerId2">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item disabled" href="#">Logout</a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse col-md-1 p-0 text-right" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="profileMenu"
                                   role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={user} width="60" height="60" className="rounded-circle" alt="user"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right"
                                     aria-labelledby="profileMenu">
                                    <a className="dropdown-item" href="/logout">Log Out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNavbar