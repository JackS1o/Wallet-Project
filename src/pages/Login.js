import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabed: true,
      inputEmail: '',
      inputPassword: '',
    };
  }

  emailChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value }, () => {
      const { inputEmail, inputPassword } = this.state;
      const { emailUser } = this.props;
      emailUser(inputEmail);

      const verifyEmail = /\S+@\S+\.\S+/;
      const result = verifyEmail.test(inputEmail);
      const six = 6;

      if (result && inputPassword.length >= six) {
        this.setState({ isDisabed: false });
      } else {
        this.setState({ isDisabed: true });
      }
    });
  }

  submitBtn = () => {
    const { history } = this.props;
    history.push('/carteira');
  };

  render() {
    const { inputEmail, inputPassword, isDisabed } = this.state;
    return (
      <div>
        <label htmlFor="login">
          <input
            type="email"
            data-testid="email-input"
            placeholder="Email"
            name="inputEmail"
            value={ inputEmail }
            onChange={ this.emailChange }
          />
          <input
            type="password"
            data-testid="password-input"
            name="inputPassword"
            value={ inputPassword }
            placeholder="Password"
            onChange={ this.emailChange }
          />
          <button
            type="button"
            disabled={ isDisabed }
            onClick={ this.submitBtn }
          >
            Entrar
          </button>
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailUser: (email) => dispatch(userEmail(email)),
});

Login.propTypes = {
  emailUser: PropTypes.func.isRequired,
  history: PropTypes.shape(PropTypes.func).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
