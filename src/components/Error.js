import React from 'react';
import Footer from '../template/Footer'
import Navbar from '../template/Navbar';
import Layout from '../template/Layout';

function WriteF() {
        console.log('Lyric saved!');
        return null;
}

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <WriteF />
                <h1>Error 404! Page does not exist!</h1>
            </React.Fragment>
        );
    }
}

export default Home