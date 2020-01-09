import React from "react";
import { useQuery } from "react-apollo";

const ListComponent = () => {
  // const { loading, data, error } = useQuery(query, {
  //   variables: {
  //     // limit
  //     // offset: 0 // it will work if we provide variables different from preloading query to ommit cache
  //   }
  // });
  // const shouldRender = !loading && !!data.feed;

  /* 
    the first call to handleRefetch will return first page of our list
    instead of both first and second pages
  */


  return (
    <>
      Some data here
    </>
  );
};

export default ListComponent;
