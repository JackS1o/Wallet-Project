import React from 'react';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.description}</td>
        <td>{item.tag}</td>
        <td>{item.method}</td>
        <td>{parseFloat(item.value).toFixed(2)}</td>
        <td>{item.exchangeRates[item.currency].name}</td>
        <td>{parseFloat(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
        <td>
          {parseFloat(item.exchangeRates[item.currency].ask
          * item.value).toFixed(2)}
        </td>
        <td>Real</td>
        <td>
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </td>
      </tr>
    );
  }
}

Expenses.propTypes = {
  item: PropTypes.objectOf(Object).isRequired,
};

export default Expenses;
