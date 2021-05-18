import React from 'react';
import {render, waitFor} from '@testing-library/react-native';

import Item from '../../components/Items';

const mockedDispatch = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('Items', () => {
  beforeEach(() => {
    // Alternatively, set "clearMocks" in your Jest config to "true"
    mockedDispatch.mockClear();
  });

  it('toggles navigation drawer on press', async () => {
    const item = {teaser: '', hero_image: ''};
    const {getByTestId} = render(<Item {...item} />);
    const icon = getByTestId('items');
    expect(icon).toBeTruthy();

    await waitFor(() => expect(getByTestId('items')).not.toBeNull());
  });
});
