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
      case 'post':
        await fetch(`${API_URL}/${url}`, {
          method: 'post',
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: JSON.stringify(parms),
        });
        console.log(parms);
        break;
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
