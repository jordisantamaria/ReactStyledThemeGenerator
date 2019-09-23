import * as React from 'react';
import {useQuery} from '@apollo/react-hooks';

interface IUseQuery {
  query: any;
  children: (data) => any;
  variables?: any;
}
const UseQuery = (props: IUseQuery) => {
  const {loading, error, data} = useQuery(props.query, {
    variables: props.variables
  });

  if (loading) {
    return <p>Loading</p>;
  } else if (error) {
    return null;
  }
  return props.children(data);
};

export default UseQuery;
