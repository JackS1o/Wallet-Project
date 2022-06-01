import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeBtn, removeList } from '../actions';
import Expenses from './Expenses';

class Table extends React.Component {
  deleteBtn = (obj) => {
    const { stateSaved, removeeed } = this.props;
    const updatedState = stateSaved.filter((element) => element.id !== obj.id);
    removeeed(updatedState);
  };

  editBtn = (obj) => {
    const { changeValue } = this.props;
    changeValue(true, obj.id);
  }

  render() {
    const { stateSaved } = this.props;
    return (
      <div>
        <table className="tabela">
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão </th>
            <th>Editar/Excluir</th>
          </tr>
          <Expenses
            stateSaved={ stateSaved }
            deleteBtn={ this.deleteBtn }
            editBtn={ this.editBtn }
          />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateSaved: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeeed: (formData) => dispatch(removeList(formData)),
  changeValue: (value, id) => dispatch(changeBtn(value, id)),
});

Table.propTypes = {
  stateSaved: PropTypes.arrayOf(Object).isRequired,
  removeeed: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
