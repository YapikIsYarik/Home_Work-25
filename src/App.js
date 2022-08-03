import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Redirect, BrowserRouter, HashRouter} from "react-router-dom";


import Header from "./components/header/header";
import HomePage from "./components/homePage/homePage";
import Contracts from "./components/contacts/Contracts";
import ImgPage from "./components/image-page/imgPage";

import ANAKIN_IMAGE from './assets/img/Anakin.jpg'
import PostRender from "./components/Posts/post-render";
import UserInfo from "./components/contacts/userInfo";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";


function App() {
    const contacts = [{
        id: 0,
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
    }, {
        id: 1,
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
    }, {
        id: 2,
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
        gender: "unknown"
    }, {
        id: 3,
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        id: 4,
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        id: 5,
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
    }];

    const posts = [
        {
            id: 1,
            author: {
                name: "Anakin Skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader",
            },
            content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: RAY_IMAGE,
            date: "28 лютого"
        },
        {
            id: 2,
            author: {
                name: "Anakin Skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader",
            },
            content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: RAY_IMAGE,
            date: "28 лютого"
        },
    ];
    return (
        <div>
            <div className="wrapper">
                <div className="container">
                    <Router>
                        <HashRouter >
                            <Header/>
                            <Route exact path="">
                                <Redirect to="/home"/>
                            </Route>
                            <Route path='/home' component={HomePage}/>
                            <Route path='/images' component={ImgPage}/>
                            <Route path='/posts'>
                                <PostRender data={posts}/>
                            </Route>
                            <Route path='/contacts' exact={true}>
                                <Contracts data={contacts}/>
                            </Route>
                            <Route path='/contacts/:username/:id'>
                                <UserInfo data={contacts}/>
                            </Route>
                        </HashRouter>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;