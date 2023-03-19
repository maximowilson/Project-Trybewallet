import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import { VALID_EMAIL, VALID_PASSWORD } from '../../cypress/utils/constants';

describe('Testes da tela de Login', () => {
  it('Verifica se a tele inicial mostra os inputs de email e password e o botão', () => {
    renderWithRouterAndRedux(<App />);
    const getEmailInput = screen.getByRole('textbox');
    const getPasswordInput = screen.getByPlaceholderText(/password/i);
    const getButton = screen.getByRole('button', { name: /entrar/i });
    expect(getButton).toBeInTheDocument();
    expect(getEmailInput).toBeInTheDocument();
    expect(getPasswordInput).toBeInTheDocument();
  });
  it('Verifica se, ao clicar no botão, as informações corretas são apresentadas', () => {
    renderWithRouterAndRedux(<App />);
    const getEmailInput = screen.getByRole('textbox');
    const getPasswordInput = screen.getByPlaceholderText(/password/i);
    const getButton = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(getEmailInput, VALID_EMAIL);
    userEvent.type(getPasswordInput, VALID_PASSWORD);
    userEvent.click(getButton);
    const currencyInput = screen.getByRole('spinbutton');
    const descriptionInput = screen.getByRole('textbox');
    const selectInputs = screen.queryAllByRole('combobox');
    const getAddButton = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(screen.getByText(/brl/i)).toBeInTheDocument();
    expect(screen.getByText(VALID_EMAIL)).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(selectInputs).toHaveLength(3);
    expect(getAddButton).toBeInTheDocument();
  });
  it('Verifica se, ao adicionar despesa, é apresentada a informação correta', () => {
    renderWithRouterAndRedux(<App />);
    const getEmailInput = screen.getByRole('textbox');
    const getPasswordInput = screen.getByPlaceholderText(/password/i);
    const getButton = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(getEmailInput, VALID_EMAIL);
    userEvent.type(getPasswordInput, VALID_PASSWORD);
    userEvent.click(getButton);
    userEvent.type(screen.getByRole('spinbutton'), '1');
    userEvent.type(screen.getByRole('textbox'), 'Description of dispenses');
    userEvent.click(screen.getByRole('button', { name: /adicionar despesa/i }));
    screen.logTestingPlaygroundURL();
  });
});
