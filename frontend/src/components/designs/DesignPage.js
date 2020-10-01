import React, { Component } from "react";
import { connect } from "react-redux";
import ConnectedPackageBase from '../packages/ConnectedPackageBase';

class DesignPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <ConnectedPackageBase />
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
