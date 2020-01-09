import gql from "graphql-tag";

export default gql`
  query {
    continents {
      code
      name
      countries {
        code
        name
        native
        phone
        currency
        emoji
        emojiU
      }
    }
  }
`;
