import gql from "graphql-tag";

export default gql`
  query {
    languages {
      code
      name
      native
      rtl
    }
  }
`;
