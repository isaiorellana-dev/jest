import getData from '../../utils/getData';

describe('Fetch API', () => {

  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', () => {
    fetch.mockResponse(JSON.stringify({ data: 'foo' }));

    getData('https://google.com').then(res => {
      expect(res.data).toEqual('foo');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
