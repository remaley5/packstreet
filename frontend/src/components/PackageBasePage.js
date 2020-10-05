import React from 'react';
import PackageBase from './packages/PackageBase';
import { connect } from 'react-redux';
import { getPackageBase } from '../store/reducers/packages';
import Navigation from './Navigation'

class PackageBasePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPackageBase(this.props.currentBaseId);
    }

    render() {
        return (
            <>
                <Navigation />
                <PackageBase packageBase={this.props.packageBase} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        packageBase: state.packages.packageBase,
        currentBaseId: state.packages.currentBaseId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPackageBase: (id) => dispatch(getPackageBase(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageBasePage);
