import React from 'react';
import Footer from './Footer'
import Navbar from './Navbar';
import Layout from './Layout';
import './Adjust.css'

export default function Article(props) {
    return (
        <div className={"w3-row "}>
            <div class={"w3-col m2 w3-center"}>&nbsp;</div>
            <div className={"w3-container w3-col m8 w3-white"}>
                {props.children}
            </div>
            <div class={"w3-col m2 w3-center"}>&nbsp;</div>
        </div>
    );
}


