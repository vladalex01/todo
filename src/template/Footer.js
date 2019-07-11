import React from 'react';
import './Adjust.css'
class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <!-- Footer --> */}
                <div className="vw3-bottom w3-container vred w3-grey w3-center">
                {/* <div className="vw3-bottom w3-container w3-black w3-padding-64 w3-center w3-opacity vred"> */}
                    <div className="w3-xlarge w3-padding-32">
                        <div className="fa fa-facebook-official w3-hover-opacity"></div>
                        <i className="fa fa-instagram w3-hover-opacity"></i>
                        <i className="fa fa-snapchat w3-hover-opacity"></i>
                        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                        <i className="fa fa-twitter w3-hover-opacity"></i>
                        <i className="fa fa-linkedin w3-hover-opacity"></i>
                    </div>
                    <p>Copyright &copy; -</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;