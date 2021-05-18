import React from 'react';
import {render} from '@testing-library/react-native';

import Section from '../../components/Section';

test('renders Section', () => {
  const props = {title: 'title', body_elements: []};
  const {getByTestId, queryByTestId} = render(<Section {...props} />);

  expect(getByTestId('title')).not.toBeNull();
  const aboutAnchorNode = queryByTestId(/title/i);
  expect(aboutAnchorNode).toBeTruthy();

  const title = getByTestId('title');
  expect(title).toBeTruthy();
});
