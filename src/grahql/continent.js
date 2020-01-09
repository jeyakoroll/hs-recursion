import gql from "graphql-tag";

export default gql`
  query continent ($code: String) {
    continent (code: $code) {
      code
      name
      countries{
        code
        name
        native
        phone
        currency
        languages{
          code
          name
          native
          rtl
        }
        emoji
        emojiU
      }
    }
  }
`;
