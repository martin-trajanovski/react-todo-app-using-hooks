import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app component correctly', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/app with hooks/i);
  expect(titleElement).toBeInTheDocument();
});
