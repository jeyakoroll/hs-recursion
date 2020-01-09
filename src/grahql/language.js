import gql from "graphql-tag";

export default gql`
  query language ($code: String) {
    language (code: $code) {
      code
      name
      native
      rtl
    }
  }
`;
