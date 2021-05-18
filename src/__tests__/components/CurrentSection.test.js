import React from 'react';
import {render} from '@testing-library/react-native';

import CaseStudies from '../../components/CurrentSection';

test('renders Current Section', async () => {
  const route = {
    params: {
      client: '',
      vertical: '',
      is_enterprise: true,
      title: '',
      sections: [],
    },
  };
  const {getByTestId} = render(<CaseStudies route={route} />);

  expect(getByTestId('current-section')).not.toBeNull();
});
