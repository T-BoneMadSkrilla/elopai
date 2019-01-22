import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import './RequestForDemoPage.css';

class RequestForDemoPage extends Component{
    render(){
        return(
            <div>
                      <br></br>
                    <form class="form-style-9" action="mailto://tylereftink@gmail.com" method="GET">
                      <p>Hey, potential client! You should email us with your information</p>
                        <ul>
                            <li>
                                <input type="text" name="subject" class="field-style field-full align-none" placeholder="Subject" />
                            </li>
                            <li>
                                <textarea  name="body" class="field-style" placeholder="Message"></textarea>
                            </li>
                            <li>
                                <input type="submit" value="Send Message" />
                            </li>
                        </ul>
                    </form>


                   <div className="icons">
                    <SocialIcon url="http://twitter.com/" />
                   
                    <SocialIcon url="http://facebook.com/" />
                    
                    <SocialIcon url="http://linkedin.com/"/>
                    
                    <SocialIcon url="http://instagram.com/"/>
                   </div>
                    
                

                  </div>
        )
    }
}

export default RequestForDemoPage;