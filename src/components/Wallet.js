import React from 'react';
import Header from './Header';
import WalletForm from './WalletForm';

export default class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <WalletForm />
      </>
    );
  }
}
