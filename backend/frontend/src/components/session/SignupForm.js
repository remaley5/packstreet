import React, { Component } from 'react';
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
            confirmPassword: '',
            hidden: ''
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
        await this.props.signup(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password,
            this.state.confirmPassword
        );
        this.setState({ hidden: 'hidden'})
    };

    updateValue(name) {
        return (e) => {
            this.setState({ [name]: e.target.value });
        }
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />
        };
        return (
            <main className={`signup-form ${this.state.hidden}`}>
                <form className='landing-page__form' onSubmit={this.handleSubmit}>
                    <input
                        className='form-input'
                        type='text'
                        placeholder='first name'
                        value={this.state.firstName}
                        onChange={this.updateFirstName}
                    />
                    <input
                        className='form-input'
                        type='text'
                        placeholder='last name'
                        value={this.state.lastName}
                        onChange={this.updateLastName}
                    />
                    <input
                        className='form-input'
                        type='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.updateEmail}
                    />
                    <input
                        className='form-input'
                        type='text'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.updatePassword}
                    />
                    <input
                        className='form-input'
                        type='text'
                        placeholder='confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.updateConfirmPassword}
                    />
                    <button className='form-button' type='submit'>Sign Up!</button>
                </form>
            </main>
        )
    }
}

const mapStateToProps = ({ auth }) => {
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
