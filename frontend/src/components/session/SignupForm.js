import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as authActions from '../../store/reducers/authentication'


class SignupForm extends Component {
        constructor(props) {
          super(props);
          this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
          };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateFirstName = this.updateValue('firstName');
        this.updateLastName = this.updateValue('lastName');
        this.updateEmail = this.updateValue('email');
        this.updatePassword = this.updateValue('password');
        this.updateConfirmPassword = this.updateValue('confirmPassword');
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        console.log('this.props', this.props);

        await this.props.signup(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password,
            this.state.confirmPassword
        );

        document.getElementById('logged-out-message').innerHTML = `You're signed up with ${this.state.email}`
        // this.props.login(this.state.email, this.state.password)
    };

    updateValue (name) {
        console.log('updating..', name)
        return (e) => {
          this.setState({ [name]: e.target.value });
        }
      }

    render() {
        if(this.props.loggedIn) {
            return <Redirect to="/" />
        };
        return(
            <main className="signup-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder='first name'
                        value={this.state.firstName}
                        onChange={this.updateFirstName}
                    />
                    <input
                        type='text'
                        placeholder='last name'
                        value={this.state.lastName}
                        onChange={this.updateLastName}
                    />
                    <input
                        type='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.updateEmail}
                    />
                    <input
                        type='text'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.updatePassword}
                    />
                    <input
                        type='text'
                        placeholder='confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.updateConfirmPassword}
                    />
                    <button type='submit'>Sign Up!</button>
                </form>
            </main>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return {
        loggedIn: !!auth.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (firstName, lastName, email, password, confirmPassword) => {
            dispatch(authActions.signup(firstName, lastName, email, password, confirmPassword));
        },
        login: (email, password) =>
            dispatch(authActions.login(email, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
