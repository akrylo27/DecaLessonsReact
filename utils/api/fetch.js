const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const fetchAPI = async (url, request, parms = null) => {
  try {
    switch (request) {
      case 'get':
        const getResponse = await fetch(`${API_URL}/${url}`, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });
        return getResponse;
      case 'POST':
        console.log(parms);
        const postResponse = await fetch(`${API_URL}/${url}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(parms),
        });
        return postResponse;
      default:
        const defResponse = await fetch(`${API_URL}/${url}`, {
          method: 'get',
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });
        return defResponse;
    }
  } catch (error) {
    console.log(error);
  }
};
export { fetchAPI };
