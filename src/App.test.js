import React from 'react';
import App from './App';
import { renderWithRedux } from './setupTests';

test('renders app component correctly', () => {
  const { getByText } = renderWithRedux(<App />);
  const titleElement = getByText(/app with hooks/i);
  expect(titleElement).toBeInTheDocument();
});
