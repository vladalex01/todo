import React from 'react';

class Header extends React.Component {
    render() {

        const style= {
            width: '100px',
            maxWidth: '1500px',
        }

        const col= {
            color: 'red'
        }
        return (
            <React.Fragment>
                <header class="w3-display-container w3-content w3-wide" style={style} id="home">
                    <img class="w3-image" src="/w3images/architect.jpg" alt="Architecture" width="1500" height="800" />
                    <div class="w3-display-middle w3-margin-top w3-center">
                        <h1 class="w3-xxlarge w3-text-white">
                            <span class="w3-padding w3-black w3-opacity-min"><b>BR</b></span> 
                            <span class="w3-hide-small w3-text-light-grey" style={col}>Architects</span>
                        </h1>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;