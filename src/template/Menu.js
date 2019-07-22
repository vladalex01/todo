import React from 'react';
import { Link } from 'react-router-dom'
import './Adjust.css'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handle_open = this.handle_open.bind(this);
        this.handle_close = this.handle_close.bind(this);
        this.state = { isOpen: false };
    }

    handle_open() {
        this.setState({ isOpen: true });
    }

    handle_close() {
        this.setState({ isOpen: false });
    }

    render() {
        const isOpen = this.state.isOpen;
        let button;

        if (isOpen) {
            button = <CloseMenu onClick={this.handle_close} />;
        } else {
            button = <OpenMenu onClick={this.handle_open} />;
        }

        return (
            <div>
                {button}
                <DisplayMenu isOpen={isOpen} />
            </div>
        );
    }
}

function SmallMenu(props) {
    return (
        <div class="w3-col sth m12 s12 w3-center w3-padding" style={{fontWeight: 'bold'}}>
            <Link to="/" className=" w3-bar-item w3-button w3-col m12 s12 w3-center">Home</Link>
            <Link to="/" className="w3-bar-item w3-button w3-col m12 s12 w3-center">Article</Link>
            <Link to="/" className="w3-bar-item w3-button w3-col m12 s12 w3-center">Revista</Link>
            <Link to="/about" className="w3-bar-item w3-button w3-col m12 s12 w3-center">About</Link>
            <Link to="/contact" className="w3-bar-item w3-button w3-col m12 s12 w3-center">Contact</Link>
        </div>
    );
}

function DisplayMenu(props) {
    const isOpen = props.isOpen;
    if (isOpen) {
        return <SmallMenu />;
    }
    return null;
}

function OpenMenu(props) {
    return (
        <button onClick={props.onClick}>
            &#9776;
      </button>
    );
}

function CloseMenu(props) {
    return (
        <button onClick={props.onClick}>
            X
      </button>
    );
}

export default Menu;