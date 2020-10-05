import React, { Component } from "react";
import { connect } from "react-redux";
import ConnectedDesignComponents from './packages/designPage/ConnectedDesignComponents';
import Navigation from './Navigation'

class DesignPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <Navigation />
                <ConnectedDesignComponents />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
};


export default connect(mapStateToProps)(DesignPage);
