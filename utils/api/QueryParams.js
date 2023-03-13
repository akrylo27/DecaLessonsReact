import qs from 'qs';

const SearchByAuthor = (input = null) => {
  const query = qs.stringify(
    {
      filters: {
        author: {
          $containsi: input,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return query;
};

const first10 = () => {
  const query = qs.stringify(
    {
      pagination: {
        page: 1,
        pageSize: 10,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return query;
};

export { SearchByAuthor, first10 };

// filters: {
//         $or: [
//           {
//             name: {
//               $containsi: input,
//             },
//           },
//           {
//             author: {
//               $containsi: input,
//             },
//           },
//         ],
//       },
//     }
