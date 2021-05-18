const fetchMock = require('fetch-mock');
import fetchData from '../../services/fetchData';

const URL =
  'https://raw.githubusercontent.com/theappbusiness/engineering-challenge/main/endpoints/v1/caseStudies.json';

describe('PostList', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.reset();
  });

  it('renders a list of posts', async () => {
    fetchMock.mock(URL, {
      status: 200,
      body: [
        {id: 1, title: '1'},
        {id: 2, title: '2'},
      ],
    });
    expect(await fetchData()).toEqual([
      {id: 1, title: '1'},
      {id: 2, title: '2'},
    ]);
  });

  it('is false', async () => {
    fetchMock.mock(URL, {
      status: 401,
      body: {success: false},
    });

    expect(await fetchData()).toEqual({success: false});
  });
});
