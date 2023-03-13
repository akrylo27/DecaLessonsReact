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

export { SearchByAuthor };

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
