import gql from "graphql-tag";

export default gql`
  query country ($code: String) {
    country (code: $code) {
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
`;
