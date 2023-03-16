import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moneyAPI from '../services/moneyAPI';
import { newExpense, saveCoin } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Cartão de débito',
    tag: 'Lazer',
  };

  componentDidMount() {
    this.setCoins();
  }

  setCoins = async () => {
    const { dispatch } = this.props;
    const response = await moneyAPI();
    const array = Object.keys(response).map((element) => element);
    dispatch(saveCoin(array));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  saveInfos = async (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const responseAPI = await moneyAPI();
    this.setState({ exchangeRates: responseAPI }, () => {
      dispatch(newExpense(this.state));
      this.setState({
        value: '',
        description: '',
        exchangeRates: '',
      });
    });
  };

  render() {
    const { value, description, method, tag, currency } = this.state;
    const { currencies } = this.props;

    return (
      <div>
        <input
          data-testid="value-input"
          type="number"
          placeholder="value"
          name="value"
          onChange={ this.handleChange }
          value={ value }
        />

        <input
          data-testid="description-input"
          type="text"
          placeholder="description"
          name="description"
          onChange={ this.handleChange }
          value={ description }
        />

        <select
          data-testid="currency-input"
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { currencies.map((element) => (
            <option
              key={ element }
              value={ element }
            >
              { element }
            </option>
          ))}
        </select>

        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>

        <select
          data-testid="tag-input"
          value={ tag }
          name="tag"
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>

        <button
          type="button"
          value="Adicionar despesa"
          onClick={ this.saveInfos }
        >
          Adicionar despesa
        </button>

      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
