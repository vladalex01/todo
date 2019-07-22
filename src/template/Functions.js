import React from 'react';
import Footer from './Footer'
import Navbar from './Navbar';
import Layout from './Layout';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Adjust.css'

export default function Article(props) {
    return (
        <div className={"w3-row "}>
            <div class={"w3-col m2 w3-center"}>&nbsp;</div>
            <div className={"w3-container w3-col w3-white"}>
                {props.children}
            </div>
            <div class={"w3-col m2 w3-center"}>&nbsp;</div>
        </div>
    //     <Container maxWidth="md">
    //     <Typography component="div" style={{ backgroundColor: 'white', height: '100vh' }}>
    //         {props.children}
    //     </Typography>
    //   </Container>
    );
}

export function TopSection(props) {
    return (
        <div className="w3-container w3-bottombar w3-border-red " style={{marginTop: '5%'}}>
            {props.children}
        </div>
    );
}

export function Title(props) {
    return (
        <div className={"title"}>
            {props.children}
        </div>
    );
}
export function Author(props) {
    return (
        <div className={"author"}>
            {props.children}
        </div>
    );
}
export function Date(props) {
    return (
        <div className={"date"}>
            {props.children}
        </div>
    );
}

export function Content(props) {
    return (
        <div className={"w3-container content"}>
            {props.children}
        </div>
    );
}


