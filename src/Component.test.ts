import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';

import Component from './Component.svelte';

test('shows label', () => {
  const { getByText } = render(Component, { label: 'World' });
  expect(getByText('World')).toBeInTheDocument();
});

// Note: This is as an async test as we are using `fireEvent`
test('changes button text on click', async () => {
  const { getByLabelText } = render(Component, { label: 'World' });

  // getByLabelText returns the associated label.
  const input = getByLabelText('World');

  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
  await fireEvent.click(input);
  expect(input).toHaveValue(0);
});

test('has input', async () => {
  const { container, component } = render(Component, {});

  // You can use container to do normal dom queries.
  const input = container.querySelector('input');
  expect(input).toBeInTheDocument();
  expect(input.type).toBe('number');
  expect(input).toHaveValue(0);
  // You can trigger methods on the dom.
  input.stepUp();
  expect(input).toHaveValue(1);

  // If needed you can set components.
  // This should be only used if there is not a better option.
  await component.$set({ value: 2 });
  expect(input).toHaveValue(2);
  expect(input).toHaveClass('red-input');
});
