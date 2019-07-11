import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {
    
    render() {

        return(
            <React.Fragment>
                <Navbar />
                <h1>Text 1</h1>
                <h1>Text 2</h1>
                <h1>Text 3</h1>
                <h1>Text 4</h1>
                <h1>Text 1</h1>
                <h1>Text 2</h1>
                <h1>Text 3</h1>
                <h1>Text 4</h1>
                <h1>Text 1</h1>
                <h1>Text 2</h1>
                <h1>Text 3</h1>
                <h1>Text 4</h1>
                <h1>Text 1</h1>
                <h1>Text 2</h1>
                <h1>Text 3</h1>
                <h1>Text 4</h1>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;