import React from 'react';
import DesignComponents from './DesignComponents';
import { connect } from 'react-redux';
import { getPackageBase } from '../../../store/reducers/packages';
import { setCurrentDropdown } from '../../../store/reducers/design';
import {setStyle } from '../../../store/reducers/design';

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
            packageBase={this.props.packageBase}
            currentDropdown={this.props.currentDropdown}
            setCurrentDropdown={this.props.setCurrentDropdown}
            setStyle={this.props.SetStyle}
            currentSide={this.props.currentSide}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        packageBase: state.packages.packageBase,
        currentDropdown: state.design.currentDropdown,
        currentSide: state.design.currentSide
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPackageBase: (num) => dispatch(getPackageBase(num)),
        setCurrentDropdown: (option) => dispatch(setCurrentDropdown(option)),
        setStyle: (model, attribute, key, value) => dispatch(setStyle(model, attribute, key, value)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedDesignComponentsComponents);
