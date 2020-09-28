import React, { Component } from "react";
import { NavLink} from "react-router-dom";

import LogoutButton from "./session/LogoutButton";
// import PokemonFormRedux from "./PokemonFormRedux";
import Fab from "./Fab";
import { getPackages } from "../store/packages";
import { connect } from "react-redux";
// import PokemonDetailRedux from "./PokemonDetailRedux";

class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  componentDidMount() {
    console.log('component did mount')
    this.props.getPackages();
  }

  handleCreated = async (pokemon) => {
    try {
      const res = await this.props.createPackage(pokemon);
      const data = await res.json();
      if (res.ok) {
        this.props.history.push(`/packages/${data.id}`);
        this.setState({
          showForm: false,
        });
      }
    } catch(e) {}
  };

  showForm = () => {
    this.setState({
      showForm: true,
    });
  };
  hideForm = () => {
    this.setState({
      showForm: false,
    });
  };

  render() {
    // if (!this.props.packages) {
    //   return null;
    // }
    return (
      <main>
        <LogoutButton />
        <div>You're logged in!</div>
        {/* <nav>
          <Fab hidden={this.state.showForm} onClick={this.showForm} />
          {this.props.packages.map((design) => {
            return (
              <NavLink key={design.name} to={`/pokemon/${design.id}`}>
                <div className="nav-entry">
                  <div>
                    <div className="primary-text">{design.name}</div>
                    <div className="secondary-text">
                      Born {new Date(design.createdAt).toDateString()}
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </nav> */}
        {/* {this.state.showForm ? (
          <PokemonFormRedux
            handleCreated={this.handleCreated}
            hideForm={this.hideForm}
          />
        ) : (
          <Route
            path="/pokemon/:id"
            component={PokemonDetailRedux}
          />
        )} */}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPackages: (packages) => dispatch(getPackages(packages)),
    // createPokemon: (pac) => dispatch(createPokemon(pokemon)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
