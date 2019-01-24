import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './InvitationPage.css';

class InvitationPage extends Component {
    render(){
        return(
            

    <div>
    <img className='invitationPageimgContainer'src='https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'/>

    <div className='invitationPageWhiteContainer'>

 <Link to='info' className='invitationLink'>Transform My Designers into Developers!</Link>
          <div className='elopAndSpeechBubbleInvitationPage'>
             <div id="slide">
                     <div className='invitationElopGreeting'>
                         Oh, it's you. Fine, if you want to learn more, click on that button.
                     </div>
                    <img src={require("../../pictures/navTopPics/elopAiLogo.PNG")}/>
                 </div>
             </div>
    </div>

    </div>



            
        )
    }
}

export default InvitationPage;