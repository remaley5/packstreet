import React, { Component } from "react";
import { connect } from "react-redux";
import ConnectedDesignComponents from './packages/designPage/ConnectedDesignComponents';

class DesignPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
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
