import React from 'react';
import {render} from '@testing-library/react-native';

import CaseStudies from '../../components/CaseStudies';

test('renders Case Studies', async () => {
  const {getByTestId, queryByTestId} = render(<CaseStudies />);

  expect(getByTestId('mainApp')).toBeTruthy();
  expect(getByTestId('data-source')).not.toBeNull();
  expect(queryByTestId('activity-indicator')).toBeNull();
});
