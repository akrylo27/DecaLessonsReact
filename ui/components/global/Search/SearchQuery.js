import qs from 'qs';

const SearchByNameAuthor = (input = null) => {
  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            name: {
              $containsi: input,
            },
          },
          {
            author: {
              $containsi: input,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return query;
};

export { SearchByNameAuthor };
