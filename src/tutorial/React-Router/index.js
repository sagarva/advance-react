import React from 'react';
import About from "./About";
import Home from './Home';
import NavBar from './NavBar';
import Error from './Error';
import People from './People';
import Person from './Person';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; //we want to use our router in our web page
//so that we would require a router which can route our components to there respective links and we would also require some kind of switch to enable or disable our router

//we can use either very unique path routes or we can use exact keywords

function ReactRouterDom() {
    return (
        <Router>
            <NavBar />
           
            <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/people'>
                <People />
            </Route>
            <Route path='/person/:id' children={<Person />}>
                
            </Route>
            <Route path='/*'>  {/*means all the pages so no matter what router i select this page is going to be display*/}
                <Error />
            </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouterDom
