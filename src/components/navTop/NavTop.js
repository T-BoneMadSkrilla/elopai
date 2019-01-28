import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../navTop/NavTop.css';

class NavTop extends Component{
    constructor(){
        super()
        this.state={
            nav: false
        }
    }
    render(){
        const {nav} = this.state
        return(
            <div className='navTopSticky'>

            <div className='navTopContainer'>   


                <div className="restOfLinks">

                <div className='divAroundPhoneLogo'> 
                <Link className='containNavPhoneTopImg'to='/info'><img src={require("../../pictures/navTopPics/elopAiLogo.PNG")}/></Link>
                </div>

                <Link to='/solutions'className="linkStyle">Solutions</Link> 

                <div className="TopNavName">Elop AI</div>

                <Link to='/about' className="linkStyle">Company</Link>

                <div className='hamburger' onClick={()=>this.setState({nav: !nav})}>
                <div className='hamburgerBuns'></div>
                <div className='hamburgerBuns'></div>
                <div className='hamburgerBuns'></div>
                </div>
                
                </div>

            </div>

                <div className='logoNavTop'>
                <Link className='containNavTopImg'to='/info'><img src={require("../../pictures/navTopPics/elopAiLogo.PNG")}/></Link>
                </div> 

            <div className='bottomDividerNavTop'></div>
            {nav && <div className='phoneNavOnClick'>
                <div onClick={()=>this.setState({nav: !nav})}> X </div>
                <Link to='/solutions'className="phonelinkStyle">Solutions</Link>
                <Link to='/about' className="phonelinkStyle">Company</Link>
                </div>}
            </div>
        )
    }
}

export default NavTop;
