import React from 'react';
import NewsApi from './components/newsApi';
import NavBar from './components/NavBar';

//import NewsDetails from './components/NewsDetails';

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = () => {
    return (

        <
        Router >
        <
        div className = "App" >
        <
        NavBar / >

        <
        Switch >
        <
        NewsApi / > { /* <Route exact path="/newsDetails/:index" exact component={NewsDetails}/> */ }

        <
        /Switch>

        <
        /div>

        <
        /Router>
    );

};

export default App;