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
                <Link to="/info" className="bottomNavLinkStyle">Home</Link>
                <Link to='/solutions'className="bottomNavLinkStyle">Solutions</Link>
                <Link to='/about' className="bottomNavLinkStyle">Company</Link>
            </div>
            </div>
        )
    }
}

export default NavBottom;
