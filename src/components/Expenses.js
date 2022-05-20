import React from 'react';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { stateSaved, deleteBtn } = this.props;
    return (
      <tbody>
        {stateSaved.map((item) => (
          <tr key={ item.id }>
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
              <button
                data-testid="edit-btn"
                type="button"
              >
                Editar
              </button>
              <button
                data-testid="delete-btn"
                type="button"
                onClick={ () => deleteBtn(item) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

Expenses.propTypes = {
  stateSaved: PropTypes.arrayOf(Object).isRequired,
  deleteBtn: PropTypes.func.isRequired,
};

export default Expenses;
