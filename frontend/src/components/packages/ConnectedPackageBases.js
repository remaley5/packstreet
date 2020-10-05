import React from 'react';
import PackageBases from './PackageBases';
import { connect } from 'react-redux';
import { getPackageBases, setCurrentBase } from '../../store/reducers/packages';

class ConnectedPackageBases extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPackageBases();
    }

    render() {
        return (
            <PackageBases
                packageBases={this.props.packageBases} setCurrentBase={this.props.setCurrentBase}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        packageBases: state.packages.packageBases,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPackageBases: () => dispatch(getPackageBases()),
        setCurrentBase: (id) => dispatch(setCurrentBase(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedPackageBases);
