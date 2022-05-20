import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Expenses from './Expenses';

class Table extends React.Component {
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
          { stateSaved.map((item, index) => (
            <tbody key={ index }>
              <Expenses
                item={ item }
              />
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateSaved: state.wallet.expenses,
});

Table.propTypes = {
  stateSaved: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Table);
