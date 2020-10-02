import React from 'react';
import DesignComponents from './DesignComponents';
import { connect } from 'react-redux';
import { getPackageBase } from '../../../store/reducers/packages';

class ConnectedDesignComponentsComponents extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const num = 2;
        this.props.getPackageBase(num);
    }

    render() {
        return (
            <DesignComponents
                packageBase={this.props.packageBase} currentDropDown={this.props.currentDropDown}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        packageBase: state.packages.packageBase,
        currentDropDown: state.packages.currentDropDown
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPackageBase: (num) => dispatch(getPackageBase(num))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedDesignComponentsComponents);
