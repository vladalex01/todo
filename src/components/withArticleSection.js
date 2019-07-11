import React, {Component} from 'react';

function withArticleSection(WrappedPageComponent) {
    return class extends Component {
        constructor(props) {
            super(props)
        }

        render() {
            return (
                <React.Fragment>
                    <div className="container-fluid">
                        <div className="row">
                            <section className="left-col" style={{'background-color': 'white'}}>
                                <div className="left-col-container">
                                </div>
                            </section>
                            <WrappedPageComponent {...this.props}/>
                            <section className="right-col">
                                <div className="right-col-container sidebar__inner">
                                </div>
                            </section>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default withArticleSection;