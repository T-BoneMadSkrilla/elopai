import React,{Component} from 'react';
import './SolutionsPage.css';

class SolutionsPage extends Component{
    render(){
        return(
            <div>
                <div className="solutionsTop"> Your business is unique. Find the right solution for your needs.</div>
                <br></br>
                <div className="solutionsCard">
                <img className='solutionsImgContain'src={require("../../pictures/landingPagePics/alexandru-acea-582050-unsplash.jpg")}></img>
                <div className="solutionsTextContain"> Suas euripidis ne mel, ei vel luptatum disputando. Cu tempor nusquam probatus duo, congue tritani ex his. Ius cu nulla perpetua hendrerit, has eu laudem nostrum. Ad tale nostrum temporibus pri, homero laoreet meliore mel </div>
                </div>
                <br></br>
                <div className="solutionsCard">
                <div></div>
                <div>The other boxes would look similar to the one above. I want to reiterate that this is just a practice run. Let me know what you like and what you hate.</div>
                </div>
                <br></br>
                <div className="solutionsCard">
                <div></div>
                <div></div>
                </div>
            </div>
        )
    }
}

export default SolutionsPage;