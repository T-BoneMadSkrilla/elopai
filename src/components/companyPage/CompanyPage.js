import React, {Component} from 'react';
import './CompanyPage.css';

class CompanyPage extends Component{
    render(){
        return(
            <div>
                <div className="topCompanyPage">
                 <div className='topCompanyPageTextContainer'>    
                    We're a company and we love making your life easier. <br></br>  Per ut iusto principes intellegat, at eam saperet officiis. Purto timeam dolorum ut vel. 
                    </div>
                    </div>

                <div className='cardAroundCompanyPeople'>
                <div>Gordon
                <div>Eu lorem dicunt placerat usu. Nibh aeque consectetuer te duo. Sea in accusata corrumpit, ex nobis incorrupte per. </div>
                </div>
                <img className="companyPeopleImgContain" src='https://media.licdn.com/dms/image/C4E03AQG3JONIujWLxA/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=AhHNv3XaYpziGu0Y3XfXvUeZY4lz9R4U4bkEeaKkD94'/>
                </div>

                <div className='cardAroundCompanyPeople'>
                <div> Boya 
                <div>Eu lorem dicunt placerat usu. Nibh aeque consectetuer te duo. Sea in accusata corrumpit, ex nobis incorrupte per. </div>
                </div>
                <img className="companyPeopleImgContain" src='https://media.licdn.com/dms/image/C5603AQFjgwufIOB_UA/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=8uhCD8zf3fXRG-HT5_cy-irQ7IGWgnA47OSvrdN7q7g'/>
                </div>

                <div className='cardAroundCompanyPeople'>
                <div> Sami 
                    <div>Eu lorem dicunt placerat usu. Nibh aeque consectetuer te duo. Sea in accusata corrumpit, ex nobis incorrupte per. </div>
                </div>
                <img className="companyPeopleImgContain" src='https://media.licdn.com/dms/image/C5603AQFXW5lMykYtBQ/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=A43QaJeY8EdvRt2etTEjXadO_W1jQBF0Yx-LklwxCJI'/>
                </div>

                <div className='cardAroundCompanyPeople'>
                <div> somebody <div>Eu lorem dicunt placerat usu. Nibh aeque consectetuer te duo. Sea in accusata corrumpit, ex nobis incorrupte per. </div></div>
                <img className="companyPeopleImgContain"src='https://i.postimg.cc/YqCZc6f3/t-bone-linked.jpg'/>
                </div>

            </div>
        )
    }
}

export default CompanyPage;