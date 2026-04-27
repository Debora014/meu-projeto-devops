import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o app sem erro', () => {
  render(<App />);
});

test('verifica se existe texto na tela', () => {
  render(<App />);
  const element = screen.getByText(/learn react/i);
  expect(element).toBeInTheDocument();
});

test('verifica se o título aparece', () => {
  render(<App />);
  const title = screen.getByText(/react/i);
  expect(title).toBeInTheDocument();
});

test('verifica se o app carrega', () => {
  const result = render(<App />);
  expect(result).toBeTruthy();
});

test('verifica estrutura básica', () => {
  render(<App />);
  const div = document.querySelector('div');
  expect(div).toBeInTheDocument();
});