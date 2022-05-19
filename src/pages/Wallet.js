import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { returnApi } = this.props;
    await returnApi();
  }

  render() {
    const { stateEmail, currentCoin } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ stateEmail }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <div>
          <form>
            <label htmlFor="Despesa">
              <input
                data-testid="value-input"
                type="text"
              />
            </label>
            <label htmlFor="Descrição">
              <input
                data-testid="description-input"
                type="text"
              />
            </label>
            <label htmlFor="Moeda">
              Moeda
              <select id="Moeda">
                {currentCoin.map((moedas, index) => (
                  <option key={ index }>{moedas}</option>
                ))}
              </select>
            </label>
            <label htmlFor="Metodo">
              <input
                data-testid="method-input"
                type="text"
              />
            </label>
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
            <label htmlFor="categoria">
              <input
                data-testid="tag-input"
                type="text"
              />
            </label>
            <select>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateEmail: state.user.email,
  currentCoin: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  returnApi: (api) => dispatch(fetchApi(api)),
});

Wallet.propTypes = {
  stateEmail: PropTypes.string.isRequired,
  returnApi: PropTypes.func.isRequired,
  currentCoin: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
