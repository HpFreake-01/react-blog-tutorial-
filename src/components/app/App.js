import React from 'react';
import './App.css'
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import News from "../News/News"
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="main">
                <Header/>
                <Navbar/>
                <div className="main_content">
                    <Route path='/dialogs'
                           render={ () => <Dialogs
                               dialogs={props.state.dialogs}
                               messages={props.state.messages}/>}/>
                    <Route path='/profile'
                           render={ () => <Profile posts={props.state.posts}/>}/>
                           <Route path='/news'
                           render={ () => <News news={props.state.news}/>}/>
                    <Route path='/settings'
                           render={ () => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
