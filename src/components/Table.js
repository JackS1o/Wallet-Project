import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeList } from '../actions';
import Expenses from './Expenses';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  deleteBtn = (obj) => {
    const { stateSaved, removeeed } = this.props;
    const updatedState = stateSaved.filter((element) => element.id !== obj.id);
    removeeed(updatedState);
  };

  render() {
    const { stateSaved } = this.props;
    console.log(stateSaved);
    return (
      <div>
        <table>
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
});

Table.propTypes = {
  stateSaved: PropTypes.arrayOf(Object).isRequired,
  removeeed: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
