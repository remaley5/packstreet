import React from 'react';
import PackageBase from './PackageBase';
import { connect } from 'react-redux';
import { getPackageBase } from '../../store/reducers/packages';

class ConnectedPackageBase extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const num = 2;
        this.props.getPackageBase(num);
    }

    render() {
        console.log('package base', this.props.packageBase)
        return (
            <PackageBase
                packageBase={this.props.packageBase}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return { packageBase: state.packages.packageBase }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPackageBase: (num) => dispatch(getPackageBase(num))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedPackageBase);
