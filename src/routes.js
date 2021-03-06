import React from 'react';
import {Switch, Route} from 'react-router-dom';
import InvitationPage from './components/invitationPage/InvitationPage';
import LandingPage from './components/landingPage/LandingPage';
import CompanyPage from './components/companyPage/CompanyPage';
import RequestForDemoPage from './components/requestForDemoPage/RequestForDemoPage';
import SolutionsPage from './components/solutionsPage/SolutionsPage';

export default (
    <Switch>
    <Route path='/' exact component={InvitationPage}/>
    <Route path='/info' component={LandingPage}/>
    <Route path='/about'component={CompanyPage}/>
    <Route path='/requestfordemo'component={RequestForDemoPage}/>
    <Route path='/solutions'component={SolutionsPage}/>
    </Switch>
);

