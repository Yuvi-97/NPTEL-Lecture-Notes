import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FeedbackModal from '../FeedbackModal';
import * as api from '../../../services/api';

jest.mock('../../../services/api');

describe('FeedbackModal Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('does not render when isOpen is false', () => {
    const { container } = render(<FeedbackModal isOpen={false} onClose={jest.fn()} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders dialog when isOpen is true', () => {
    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Feedback & Suggestions/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Alex Johnson/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Feedback/i })).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<FeedbackModal isOpen={true} onClose={handleClose} />);
    const closeBtn = screen.getByLabelText(/Close dialog/i);
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('submits feedback successfully to backend', async () => {
    api.submitFeedback.mockResolvedValueOnce({
      success: true,
      data: { id: 1, name: 'Alice', comments: 'Great summary!' },
    });

    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);

    const nameInput = screen.getByPlaceholderText(/Alex Johnson/i);
    const commentInput = screen.getByPlaceholderText(/What notes were helpful/i);
    const submitBtn = screen.getByRole('button', { name: /Submit Feedback/i });

    fireEvent.change(nameInput, { target: { value: 'Alice' } });
    fireEvent.change(commentInput, { target: { value: 'Great summary of week 1!' } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(api.submitFeedback).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Alice',
          comments: 'Great summary of week 1!',
        })
      );
    });

    expect(await screen.findByText(/Thank You!/i)).toBeInTheDocument();
  });
});
