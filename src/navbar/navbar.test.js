import { render, fireEvent } from '@testing-library/react';
import NavBar from './navbar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect.js';

it('should hide/display when menu button is clicked', async () => {
  const { getByTestId } = render(
    <Router>
      <NavBar auth={true} />
    </Router>
  );
  const button = getByTestId('navbar-event-firer');
  const navbar = getByTestId('navbar-display');
  expect(navbar).toHaveClass('hide');
  fireEvent.click(button);
  expect(navbar).toHaveClass('show');
  fireEvent.click(button);
  expect(navbar).toHaveClass('hide');
});
