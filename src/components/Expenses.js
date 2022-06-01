import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';

class Expenses extends React.Component {
  render() {
    const { stateSaved, deleteBtn, editBtn } = this.props;
    return (
      <tbody className="table-boddy">
        {stateSaved.map((item) => (
          <tr key={ item.id }>
            <td>{item.description}</td>
            <td>{item.tag}</td>
            <td>{item.method}</td>
            <td>{parseFloat(item.value).toFixed(2)}</td>
            <td>{item.exchangeRates[item.currency].name.split('/')[0]}</td>
            <td>{parseFloat(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
            <td>
              {parseFloat(item.exchangeRates[item.currency].ask
              * item.value).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <div className="td-btn">
                <button
                  className="btn-edit"
                  data-testid="edit-btn"
                  type="button"
                  onClick={ () => editBtn(item) }
                >
                  <FiEdit />
                </button>
                <button
                  className="btn-delete"
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => deleteBtn(item) }
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
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
  editBtn: PropTypes.func.isRequired,
};

export default Expenses;
