const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const fetchAPI = async (url, request) => {
  try {
    switch (request) {
      case 'get':
        const response = await fetch(`${API_URL}/${url}`, {
          method: request,
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });
        return response;
      case 'post':
        console.log('post');
        break;
      default:
        console.log('get');
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
export { fetchAPI };
