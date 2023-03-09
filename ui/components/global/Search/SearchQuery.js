import qs from 'qs';

const SearchByNameAuthor = (input = null) => {
  const query = qs.stringify(
    {
      $or: [
        {
          fields: ['name'],
          filters: {
            name: {
              $containsi: input,
            },
          },
          fields: ['author'],
          filters: {
            author: {
              $containsi: input,
            },
          },
        },
      ],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return query;
};

export { SearchByNameAuthor };
