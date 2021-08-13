import React from 'react';
import About from "./About";
import Home from './Home';
import NavBar from './NavBar';
import Error from './Error';
import People from './People';
import Person from './Person';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; //we want to use our router in our web page
//so that we would require a router which can route our components to there respective links and we would also require some kind of switch to enable or disable our router


function ReactRouterDom() {
    return (
        <Router>
            <Route path='/'>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/error'>
                <Error />
            </Route>
            <Route path='/people'>
                <People />
            </Route>
            <Route path='/navbar'>
                <NavBar />
            </Route>
            <Route path='/person'>
                <Person />
            </Route>
        </Router>
    )
}

export default ReactRouterDom
