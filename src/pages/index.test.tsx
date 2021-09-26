import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './index';

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<Home />);

    const heading = screen.queryByText('My Dashboard');

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.jsa
    expect(heading).toBeTruthy();
  });
});
