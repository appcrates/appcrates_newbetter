import React, { Component } from 'react';

const dropset = {
    marginTop: '33px',
}

class DashboardHeader extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="">
                <header className="bg_img">
                <nav className="navbar navbar-expand-md navbar-light p-md-0">
                    <a className="navbar-brand" href="#">
                        <img src="./dashboard/logo.png" className="w-100 pl-md-5" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item d-inline-block">
                                    <img src="./dashboard/search.png" />
                                </li>
                                <li className="nav-item d-inline-block">
                                    <img src="./dashboard/settings.png" />
                                </li>
                                <li className="nav-item d-inline-block dropdown">
                                    <a className="nav-link p-0 dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="./dashboard/Layer3.png" className="layer3" />
                                        <div className="notify">
                                        <span>2</span>
                                    </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right p-0" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </div>
                                    
                                </li>
                                <li className="mt-md-0 mt-2 w-100 bg-color">
                                    <div className="nav-item_1">
                                        <div className="cricl-image float-left">
                                           <span className="active_cricl">
                                               <span className="active_cricl_1"></span>
                                           </span>
                                        </div>
                                        <div className="float-left pl-2">
                                            <h6 className="title_name mb-0 pt-2">Mr Hamza</h6>
                                            <h6 className="description">Lorem Ipsum</h6>
                                        </div>
                                        <div className="dropdown float-right pl-lg-2 pl-1 pt-2">
                                            <a href="" className="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src="./dashboard/Group1.png"  className="group_1"/>
                                            </a>
                                                <div className="dropdown-menu dropdown-menu-right p-0" style={dropset}>
                                                    <a className="dropdown-item" href="#">Profile</a>
                                                    <a className="dropdown-item" href="#">Log Out</a>
                                                </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <style jsx>{`
                    .bg_img{
                        background-image: url(./dashboard/header.png);
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        font-family: proxima-nova, sans-serif;
                    }
                    .nav-item{
                        padding: 24px 28px 12px 28px;
                        border-left:1px solid #f3f0f085;
                    }
                    .nav-item_1{
                        padding: 9px 28px 12px 24px;
                    }
                    .bg-color{
                        background: #6a6a6a3d;
                        height: 80px;
                    }
                    .description{
                        font-size:12px;
                        font-weight:normal;
                        color: #ffffffa6;
                    }
                    .title_name{
                        color: white;
                        font-Weight: 600;
                    }
                    .notify{
                        background: #fbde06;
                        height: 18px;
                        border-radius: 100%;
                        width: 18px;
                        font-size: 13px;
                        padding-left: 4px;
                        position: absolute;
                        top: -8px;
                        color: #cc3535;
                        left: 50%;
                        font-weight: 800;
                    }
                    .layer3{
                        position: relative;
                    }
                    .cricl-image{
                        background-image: url(./dashboard/sports-campaigns-causevest.jpg);
                        background-size:cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        width: 60px;
                        height: 60px;
                        position: relative;
                        border-radius: 100%;
                        box-shadow: 1px 1px 12px 6px #0d0d0d38;
                    }
                    .active_cricl{
                        height: 18px;
                        width: 18px;
                        position: absolute;
                        display: inline-block;
                        background: #138f67;
                        border-radius: 100%;
                        bottom: 0px;
                        left: 65%;
                    }
                    .active_cricl_1{
                        height: 10px;
                        width: 10px;
                        display: inline-block;
                        background: #00ff00;
                        border-radius: 100%;
                        margin: 4px 4px;
                    }
                    @media only screen and (max-width: 440px){
                        // .nav-item{
                        //     display: inline-block;

                        // }
                        // .navbar-nav{
                        //     display: inline-flex !important;
                        // }
                        ul{
                            display: inline-block;
                        }
                    }
            `}</style>
            </div>
            
        )
    }
}

export default DashboardHeader;