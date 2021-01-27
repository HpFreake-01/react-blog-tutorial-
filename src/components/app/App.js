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
                               newMassageText={props.state.dialogPage.newMessageText}
                               dispatch={props.dispatch}
                               dialogPage = {props.state.dialogPage}
                               />}/>
                    <Route path='/profile'
                           render={ () => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}/>
                           <Route path='/news'
                           render={ () => <News
                               newsPage={props.state.newsPage}
                               dispatch={props.dispatch}
                               newNewsText={props.state.newsPage.newNewsText}
                           />}/>
                    <Route path='/settings'
                           render={ () => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
