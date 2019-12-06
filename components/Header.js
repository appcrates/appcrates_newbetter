import Link from 'next/link';
import Head from 'next/head'

const Header = () => {
    return (
        <div>
            <Head>
                <link rel="stylesheet"
                      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://use.typekit.net/iav6lfa.css"/>
            </Head>
            <div className="navbar_1">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link href="/"><h6 className="navbar-brand ml-md-5 ml-0 pl-2"><img src='/images/header_logo.png' className="logoname"/></h6></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <button className="bnt-23">Join Us</button>
                            <ul className="navbar-nav">
                                <li className="nav-item ml-2">
                                    {/*<Link to="/"><h6 className="nav-link">Home</h6></Link>*/}
                                </li>
                                <li className="nav-item ml-1">
                                    {/*<Link to="/"><h6 className="nav-link project" href="#">WHy This Project?</h6></Link>*/}
                                </li>
                                <li className="nav-item ml-1">
                                    {/*<Link to="/OurValues"><h6 className="nav-link project" href="#">Our Values</h6></Link>*/}
                                </li>
                                <li className="nav-item">
                                    {/*<h6 className="nav-link project_1" href="#">Application</h6>*/}
                                </li>
                                <li className="nav-item ">
                                    {/*<button className="bnt-23">Join Us</button>*/}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <style jsx>{`
            .navbar_1{
                position: absolute;
                width: 100%
                z-index: 1000;
            }
            .navbar{
                padding:.2rem 0rem !important;
            }
            .navbar-nav{
                margin-left: 32px;
            }
            .logoname{
                width: 75%;
            }
            .bnt-23:hover{
                background-color: #fbde06;
                color: black;
            }
            nav li h6{
                text-transform: uppercase;
                color: white ;
                text-align: center;
                padding: 10px 14px !important;
                font-size: 15px;
                font-weight: 800;
            }
            nav li a{
                text-decoration: none;
            }
            nav li a:hover {
                text-decoration: none;
            }
            nav li h6:hover{
                color: #fbde06 !important;
            }
            nav .bnt-23{
                text-transform: uppercase;
                border: 1px solid #fbde06;
                border-radius: 25px;
                padding: 9px 23px;
                font-weight: 700;
                margin-left: 17px;
                margin-top: -3px;
            }
            .project{
                letter-spacing: .4px;
            }
            .project_1{
                letter-spacing: .6px;
            }
            @media only screen and (max-width:1024px){
                .navbar_1{
                    position: relative;
                    background-image: linear-gradient(45deg, #0b94ab, #12a09a);
                }
                nav li h6{
                    padding: 10px 7px !important;
                    font-size: 14px;
                }
                nav.bnt-23{
                    text-transform: uppercase;
                    border: 1px solid #fbde06;
                    border-radius: 25px;
                    padding: 9px 20px;
                    font-weight: 700;
                    margin-left: 17px;
                    margin-top: -3px;
                }
                .navbar-toggler{
                    margin-right: 16px;
                    margin-top: -10px;
                }
            }
            @media only screen and (max-width:990px){
                .navbar_1{
                    position: relative;
                    background-image: linear-gradient(45deg, #0b94ab, #12a09a);
                }
                nav li h6{
                    float: left;
                    margin-left: 10px;
                }
                .navbar-toggler{
                    margin-right: 16px;
                    margin-top: -10px;
                }
                .logoname{
                    width: 65%;
                }
            }
        `}</style>
        </div>
    )
}

export default Header