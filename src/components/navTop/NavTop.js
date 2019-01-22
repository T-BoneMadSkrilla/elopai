import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../navTop/NavTop.css';

class NavTop extends Component{
    render(){
        return(
            <div>

            <div className='navTopContainer'>   

                <div className="logoAndName">
                <Link className='containNavTopImg'to='/'><img src={require("../../pictures/navTopPics/elopAiLogo.PNG")}/></Link>
                <div>Elop AI</div>
                </div> 

                <div className="restOfLinks">
                <Link to='/solutions'className="linkStyle">Solutions</Link>
                <Link to='/about' className="linkStyle">Company</Link>
                <Link to='/requestfordemo'className="linkStyle">Request For Demo</Link>
                </div>

            </div>
            <div className='bottomDividerNavTop'></div>
            </div>
        )
    }
}

export default NavTop;

//import './LandingPage.css';
