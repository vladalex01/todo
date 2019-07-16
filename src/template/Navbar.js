import React from 'react';
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import Toggle from './Functions'
import './Adjust.css'
import './Logo.css'
import Menu from './Menu';

/* 
    componentDidMount() {
        ce se intampla dupa pagina
        construita
    }

    componentWillUnmount() {

    }
*/

class Navbar extends React.Component {
    render() {
        function w3_open() {
            // document.getElementById("mySidebar").style.display = "block";
        }
        return (

            /* Layout style: should be here for debugging purposes */
            <div className="vw3-top main-header">
                <div class="w3-row">
                    <div class="w3-col m1 s1 w3-center">&nbsp;</div>
                    <div class="w3-col m1 s1 w3-center">&nbsp;</div>
                    <div class="w3-col m1 s1 w3-center w3-grey">3</div>
                    <div class="w3-col m1 s1 w3-center">4</div>
                    <div class="w3-col m1 s1 w3-center w3-grey">5</div>
                    <div class="w3-col m1 s1 w3-center">6</div>
                    <div class="w3-col m1 s1 w3-center w3-grey">7</div>
                    <div class="w3-col m1 s1 w3-center">8</div>
                    <div class="w3-col m1 s1 w3-center w3-grey">9</div>
                    <div class="w3-col m1 s1 w3-center">10</div>
                    <div class="w3-col m1 s1 w3-center w3-grey">&nbsp;</div>
                    <div class="w3-col m1 s1 w3-center w3-gray">&nbsp;</div>
                </div>
   
                <div className="w3-bar w3-white w3-padding w3-card w3-row">
                    <div class="w3-col m1 w3-center">&nbsp;</div>
                    <div class="w3-col m1 w3-center">&nbsp;</div>
                    <Link to="/" className="w3-bar-item w3-button w3-col w3-center m2 s5"><b>
                        {/* <img src={logo} width="80%"/>*/}LOGO</b></Link>
                    <div class="w3-col m1 w3-center w3-hide-small">&nbsp;</div>

                    {/*  Float links to the right. Hide them on small screens */}
                    <div className="w3-hide-large">
                        <div class="w3-col m1 s1 w3-center">&nbsp;</div>
                        <div class="w3-col m1 s1 w3-center">&nbsp;</div>
                        {/* <div class="w3-col m1 s1 w3-center">&nbsp;</div>
                        <div class="w3-col m1 s1 w3-center">&nbsp;</div> */}
                        <div style={{marginTop: '1%', fontWeight: 'bold'}}>
                            <Menu />
                        </div>
                    </div>
                    <div className="w3-hide-medium w3-hide-small" style={{fontWeight: 'bold'}}>
                        <Link to="/" className="w3-bar-item w3-button w3-col m1 w3-center">Home</Link>
                        <Link to="/" className="w3-bar-item w3-button w3-col m1 w3-center">Article</Link>
                        <Link to="/" className="w3-bar-item w3-button w3-col m1 w3-center">Revista</Link>
                        <Link to="/about" className="w3-bar-item w3-button w3-col m1 w3-center">About</Link>
                        <Link to="/contact" className="w3-bar-item w3-button w3-col m1 w3-center">Contact</Link>
                    </div>
                </div>
                <div class="w3-col m12 w3-center">&nbsp;</div>
                    {/* Submenu */}
                <div class="w3-col m12 w3-center">&nbsp;</div>
                
            </div>

        );
    }
}

export default Navbar;