const axios = require('axios');

test('version', async () => {
  const response = await axios.get('http://localhost:8080/version')
  expect(response.data).toMatch(/There is NO warranty/)
});

test('compile', async () => {
  try {
    await axios.get('http://localhost:8080/')
  } catch (e) {
    expect(e.response.status).toEqual(404)
  }
});
