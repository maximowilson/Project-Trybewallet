import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../redux/actions';

class Table extends Component {
  deleteItem = (id) => {
    const { expenses, dispatch } = this.props;
    const deletedExpense = expenses.filter((element) => element.id !== id);
    dispatch(deleteExpense(deletedExpense));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        { console.log(this.props) }
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.length ? expenses.map((expense, index) => (
            <tr key={ index }>
              <td>
                { expense.description }
              </td>
              <td>
                { expense.tag }
              </td>
              <td>
                { expense.method }
              </td>
              <td>
                { Number(expense.value).toFixed(2) }
              </td>
              <td>
                { expense.currency }
              </td>
              <td>
                { Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>
                { (expense.value
                  * expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>
                { expense.exchangeRates[expense.currency].name }
              </td>
              <td>
                <button
                  data-testid="delete-btn"
                  onClick={ () => this.deleteItem(expense.id) }
                  type="button"
                >
                  {' '}
                  Delete
                </button>
              </td>
            </tr>
          )) : <p>Empty list</p> }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  ...state.wallet,
});

export default connect(mapStateToProps)(Table);
