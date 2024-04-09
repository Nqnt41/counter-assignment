// import necessary react testing library helpers here
// import the Counter component here
import Counter from '../components/Counter'
import {render, screen, fireEvent} from "@testing-library/react";

beforeEach(() => {
  // Render the Counter component
    render(<Counter />);
})

test('renders counter message', () => {
  // Checks that the Counter text is displayed on-screen through counterMessage
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Checks that count starts at zero through initialCount
  const initialCount = screen.getByTestId("count");
  expect(initialCount.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Check that text and count properly display
  const incrementButton = screen.getByText("+");
  const countDisplay = screen.getByTestId("count");

  // fireEvent increases count by calling incrementButton
  fireEvent.click(incrementButton);

  // Check that count actually incremented
  expect(countDisplay.textContent).toBe("1");

  // Increment count by ten, check that still works
  for (let i = 0; i < 10; i++) {
    fireEvent.click(incrementButton);
  }
  expect(countDisplay.textContent).toBe("11");
});

test('clicking - decrements the count', () => {
  // Check that text and count properly display
  const decrementButton = screen.getByText("-");
  const countDisplay = screen.getByTestId("count");

  // fireEvent decreases count by calling decrementButton
  fireEvent.click(decrementButton);

  // Check that count actually decremented and can be in the negatives
  expect(countDisplay.textContent).toBe("-1");

  // Decrement count by ten, check that still works
  for (let i = 0; i < 10; i++) {
    fireEvent.click(decrementButton);
  }
  expect(countDisplay.textContent).toBe("-11");
});
