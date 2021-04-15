import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import Service from "./Service";
import About from './About';
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import Registration from './Registration';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

const App =() => {
    return(
        <div>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user" component={Home}/> 
        <Route path = "/employees" component = {ListEmployeeComponent}></Route>
        <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
        <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
        <Route exact path="/"></Route>
        <Redirect to = "/"/>
        </Switch>
        <Footer />
        </div>
    );
};
export default App;
