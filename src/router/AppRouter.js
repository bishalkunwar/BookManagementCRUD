import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../component/Header';
import AddBook from '../component/AddBook';
import BooksList from '../component/BooksList'


const AppRouter = () => {
    return ( <
        BrowserRouter >
        <
        div >
        <
        Header / >
        <
        div className = "main-content" >
        <
        Switch >
        <
        Route component = { BooksList }
        path = "/"
        exact = { true }
        /> <
        Route component = { AddBook }
        path = "/add" / >
        <
        /Switch> < /
        div > <
        /div> < /
        BrowserRouter >
    );
};

export default AppRouter;