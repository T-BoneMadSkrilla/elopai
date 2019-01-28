import React,{Component} from 'react';
import './LandingPage.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavTop from '../navTop/NavTop';
import NavBottom from '../navBottom/NavBottom';

class LandingPage extends Component {
    render(){
        return(
            <div className="landingPageOverFlowHidden">
            <NavTop/>

            <div className="spaceAroundLandingPageImg"> 
            <img className='landingPageImgContain'src={require('../../pictures/landingPagePics/nordwood-themes-478713-unsplash.jpg') }/>
            </div>

                <div className="bottomDividerLandingPage"></div>

                <div className='landingPageFirstSection'>
                <img className="landingPageSecondImg"src={require('../../pictures/landingPagePics/clement-h-544786-unsplash.jpg')} />
                <div className="landingPageFirstParagraph">
                 Elop is changing the way corporate applications are built, using proprietary AI code. With it, you can build beautiful apps, innovate customer experiences with a plurality of options for end-user testing, spin up your prototypes quickly, and fail faster than ever before!
                <br></br>
                <br></br>
                Though every company wishes it could employ code-star talent, very few can actually afford to retain that talent. Not only is it expensive, but if that person leaves, they take deep tranches of knowledge with them. 
                <br></br>
                <br></br>
                With Elop AI, we enable code-capable engineers to become code-stars. 
                <br></br>
                <br></br>
                Once all the iterations of an app have been spun up and spun down, the code can be exported and plugged into an external website, run through a domain hosting service. 
                <br></br>
                <br></br>
                Real Code. Really Clean. 
                </div>
                </div>
                <div className="landingPageSecondDivider"></div>

                <div className="landingPageThirdContainer">
                    <div className="landingPageThirdSection">Lorem ipsum dolor sit amet, impedit dissentias ut mel, at nec erant doctus appellantur, his cibo senserit evertitur te.</div>
                    <div className="landingPageThirdSection">Pro tantas altera option ei, eu vix erant inermis adversarium. Vivendo antiopam maluisset est ei. No</div>
                    <div className="landingPageThirdSection">Odio eleifend percipitur ei sed. Mel et timeam saperet, forensibus delicatissimi cu per. Tantas altera gloriatur eam te. </div>
                </div>
                <NavBottom/>
            </div>
        )
    }
}

export default LandingPage;

// color code light blue #56C5FD navy #0C4B69 white white-ish blue #CFE9F6
