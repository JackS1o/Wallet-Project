import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { stateEmail } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ stateEmail }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateEmail: state.user.email,
});

Wallet.propType = {
  stateEmail: PropTypes.shape(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Wallet);
