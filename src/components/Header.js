import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  some = () => {
    const { despesa } = this.props;
    const reduced = despesa.reduce(((acc, cur) => {
      const total = cur.value * cur.exchangeRates[cur.currency].ask;
      acc += total;
      return acc;
    }), 0);
    return reduced.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <header>
        <span
          data-testid="total-field"
        >
          { this.some() }
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
        <div data-testid="email-field">{ email }</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesa: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
