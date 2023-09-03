import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MyButton } from '.';

describe('MyButton', () => {
    it('renders the button with the correct text', () => {
        render(<MyButton name="Test Button" width={278} height={60} />);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
      });

  it('renders with a specified variant', () => {
    render(<MyButton name="Test Button" variant="outlined" width={278} height={60} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('MuiButton-outlined');
  });


  it('calls a onClick function when button clicked', () => {
    const onClick = jest.fn();
    render(<MyButton name="Test Button" onClick={onClick} width={278} height={60} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});