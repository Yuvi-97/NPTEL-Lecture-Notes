import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('renders "Made with" heart symbol and GitHub repo link', () => {
    render(<Footer />);

    // Brand and Made with Heart
    expect(screen.getByText(/NPTEL Notes/i)).toBeInTheDocument();
    expect(screen.getByText(/Made with/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/love/i)).toBeInTheDocument();
    expect(screen.getByText(/Yuvi/i)).toBeInTheDocument();

    // GitHub Link
    const githubLink = screen.getByRole('link', { name: /GitHub Repo/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Yuvi-97/NPTEL-Lecture-Notes');
    expect(githubLink).toHaveAttribute('target', '_blank');

    // Feedback button
    const feedbackBtn = screen.getByRole('button', { name: /Feedback & Comments/i });
    expect(feedbackBtn).toBeInTheDocument();
  });

  test('opens feedback modal when Feedback button is clicked', () => {
    render(<Footer />);
    const feedbackBtn = screen.getByRole('button', { name: /Feedback & Comments/i });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(feedbackBtn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
