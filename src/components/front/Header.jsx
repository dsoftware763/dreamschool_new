import React from 'react';
import {Link} from 'react-router-dom';
import redesign_logo from '../../assets/img/redesign-logo.png';
import ProgramSearchInput from '../common/ProgramSearchInput';
const Header = () => {
    return (
        <header className="fixed-header">
            <nav className="navbar navbar-default custom-navbar" role="navigation">
                <div className="col-lg-4 col-md-3">
                    <div className="navbar-header">
                    <Link to="/">
                        <img className="school-logo" src={redesign_logo} alt="Dreamschools" />
                    </Link>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    </div>
                </div>
      
                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div className="col-lg-8 col-md-9">
                    <div className="collapse navbar-collapse flex-important" id="navbar-collapse">
                        <div className="row">

                        <div className="col-xl-4 d-none d-xl-block">
                            <ProgramSearchInput />
                        </div>
                            <div className="col-lg-12 col-xl-8 col-md-12 right">
                                <ul className="nav navbar-nav navbar-right custom-right-navbar">
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/search">Find</Link></li>
                                    <li><Link to="/partner">Provide</Link></li>
                                    <li><Link className="nav-link" to="/sign-in">Sign In</Link></li>
                                    <li><Link className="nav-link" to="/register">Family Sign Up</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;