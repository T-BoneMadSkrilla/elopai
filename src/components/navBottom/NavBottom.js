import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBottom.css';

class NavBottom extends Component {
    render(){
        return(
            <div>
                <div className="navBottomWhiteDivider"></div>
                <div className="navBottomNavyDivider"></div>
            <div className="navBottomNavy">
                <Link to="/" className="bottomNavLinkStyle">Home</Link>
                <Link to='/solutions'className="bottomNavLinkStyle">Solutions</Link>
                <Link to='/about' className="bottomNavLinkStyle">Company</Link>
                <Link to='/requestfordemo'className="bottomNavLinkStyle">Request For Demo</Link>
            </div>
            </div>
        )
    }
}

export default NavBottom;