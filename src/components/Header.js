import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    totalField: '0',
  };

  render() {
    const { email } = this.props;
    const { totalField } = this.state;
    return (
      <header>
        <span
          data-testid="total-field"
        >
          Total de despesas:
          { totalField }
        </span>
        {' '}
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
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
