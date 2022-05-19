import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi, formState } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      value: '',
      exchangeRates: {},
    };
  }

  async componentDidMount() {
    const { returnApi } = this.props;
    await returnApi();
  }

  formExpense = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  submitExpenses = async () => {
    const { formData, returnApi } = this.props;
    const result = await returnApi();
    this.setState({ exchangeRates: result.currency });
    formData(this.state);
    this.setState((prev) => ({
      id: prev.id + 1,
      currency: '',
      description: '',
      method: '',
      tag: '',
      value: '',
      exchangeRates: {},
    }));
  }

  render() {
    const { currency, description, method, tag, value } = this.state;
    const { currentCoin } = this.props;
    return (
      <form>
        <label htmlFor="Despesa">
          Despesa
          <input
            id="Despesa"
            data-testid="value-input"
            type="text"
            name="value"
            value={ value }
            onChange={ this.formExpense }
          />
        </label>
        <label htmlFor="Descrição">
          <input
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ this.formExpense }
          />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select
            id="Moeda"
            name="currency"
            value={ currency }
            onChange={ this.formExpense }
          >
            {currentCoin.map((moedas, index) => (
              <option
                key={ index }
              >
                {moedas}
              </option>
            ))}
          </select>
        </label>
        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.formExpense }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.formExpense }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button
          type="button"
          onClick={ this.submitExpenses }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  returnApi: (api) => dispatch(fetchApi(api)),
  formData: (formData) => dispatch(formState(formData)),
});

const mapStateToProps = (state) => ({
  stateEmail: state.user.email,
  currentCoin: state.wallet.currencies,
});

Form.propTypes = {
  returnApi: PropTypes.func.isRequired,
  currentCoin: PropTypes.arrayOf(PropTypes.string).isRequired,
  formData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
