import React, { Component } from "react";
import { connect } from "react-redux";
import { getSavedDesigns } from '../../store/reducers/packages';
import RenderBoxes from './RenderBoxes'
import Navigation from '../Navigation'

class SavedPackages extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    this.props.getSavedDesigns(this.props.id);
  }

  render() {
    return (
      <>
        <Navigation />
        <div className='saved-designs-page'>
          <div className='saved-designs-page__header'>
            <h1>My Designs</h1>
          </div>
          <div className='saved-designs-page__designs-container'>
            {this.props.savedDesigns.map((design, i) => {
              return (
                <div key={`design${i}`} className='saved-designs-page__designs-container__design'>
                  <RenderBoxes key={`renderbox${i}`} design={design} />
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    savedDesigns: state.packages.savedDesigns,
    currentSide: state.design.currentSide
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSavedDesigns: userId => dispatch(getSavedDesigns(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedPackages);
