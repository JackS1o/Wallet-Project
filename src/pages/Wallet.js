import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { stateEmail, stateAsk } = this.props;
    let askValue = 0;
    stateAsk.forEach((moeda) => {
      const { currency, exchangeRates, value } = moeda;
      askValue += parseFloat(value) * exchangeRates[currency].ask;
    });
    return (
      <div>
        <header>
          <p data-testid="email-field">{ stateEmail }</p>
          <p data-testid="total-field">{askValue.toFixed(2)}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <div>
          <Form />
          <Table askValue={ askValue } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateEmail: state.user.email,
  stateAsk: state.wallet.expenses,
});

Wallet.propTypes = {
  stateEmail: PropTypes.string.isRequired,
  stateAsk: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Wallet);
