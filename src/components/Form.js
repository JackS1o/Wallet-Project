import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi, formState, sendNewValuesActions } from '../actions';

const alimento = 'Alimentação';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: alimento,
      value: '0',
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
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: alimento,
      value: '0',
      exchangeRates: {},
    }));
  }

  sendExpenses = () => {
    const { editBtnData, sendNewValues } = this.props;
    const { currency, description, method, tag, value } = this.state;
    const newObjEdited = {
      id: editBtnData.id,
      currency,
      description,
      method,
      tag,
      value,
    };
    sendNewValues(newObjEdited);
    this.setState({
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: alimento,
      value: '0',
      exchangeRates: {},
    });
  }

  render() {
    const { currency, description, method, tag, value } = this.state;
    const { currentCoin, editBtnData } = this.props;
    const result = editBtnData ? editBtnData.isOnEditMode : false;
    return (
      <form className="form">
        <label htmlFor="Despesa">
          Despesa
          <input
            className="inputs"
            id="Despesa"
            data-testid="value-input"
            type="number"
            name="value"
            value={ value }
            onChange={ this.formExpense }
          />
        </label>
        <label htmlFor="Descrição">
          <input
            className="inputs"
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
            className="inputs"
            id="Moeda"
            name="currency"
            value={ currency }
            data-testid="currency-input"
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
          className="inputs"
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
          className="inputs"
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
        { result ? (
          <button
            className="btn-despesa-edit"
            type="button"
            onClick={ this.sendExpenses }
          >
            Editar despesa
          </button>
        )
          : (
            <button
              className="btn-despesa"
              type="button"
              onClick={ this.submitExpenses }
            >
              Adicionar despesa
            </button>
          )}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  returnApi: (api) => dispatch(fetchApi(api)),
  formData: (formData) => dispatch(formState(formData)),
  sendNewValues: (newObj) => dispatch(sendNewValuesActions(newObj)),
});

const mapStateToProps = (state) => ({
  stateEmail: state.user.email,
  currentCoin: state.wallet.currencies,
  editBtnData: state.wallet.editExpenses,
});

Form.propTypes = {
  returnApi: PropTypes.func.isRequired,
  currentCoin: PropTypes.arrayOf(PropTypes.string).isRequired,
  formData: PropTypes.func.isRequired,
  editBtnData: PropTypes.func.isRequired,
  sendNewValues: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
