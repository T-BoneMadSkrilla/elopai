import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../navTop/NavTop.css';

class NavTop extends Component{
    render(){
        return(
            <div className='navTopSticky'>

            <div className='navTopContainer'>   


                <div className="restOfLinks">
                <Link to='/solutions'className="linkStyle">Solutions</Link>
                <div className="TopNavName">Elop AI</div>
                <Link to='/about' className="linkStyle">Company</Link>
                </div>

            </div>

                <div className='logoNavTop'>
                <Link className='containNavTopImg'to='/info'><img src={require("../../pictures/navTopPics/elopAiLogo.PNG")}/></Link>
                </div> 

            <div className='bottomDividerNavTop'></div>

            </div>
        )
    }
}

export default NavTop;
