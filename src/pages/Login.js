import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    submitButton: true,
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const min = 4;
    const { type, value } = target;
    const { email, password } = this.state;
    this.setState({
      [type]: value,
    }, () => {
      if (this.verifyEmail(email) && password.length > min) {
        this.setState({
          submitButton: false,
        });
      } else {
        this.setState({
          submitButton: true,
        });
      }
    });
  };

  verifyEmail = (email) => {
    const regExpression = /\S+@\S+\.\S+/;
    return regExpression.test(email);
  };

  render() {
    const { submitButton, email, password } = this.state;
    const { history, dispatch } = this.props;

    return (
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          dispatch(saveEmail(email));
          history.push('/carteira');
        } }
      >

        <input
          value={ email }
          type="email"
          name="email"
          id="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <input
          value={ password }
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          disabled={ submitButton }
        >
          Entrar

        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Login);
