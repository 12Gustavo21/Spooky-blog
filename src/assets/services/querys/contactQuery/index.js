import { gql } from "@apollo/client";

export const CONTACT_QUERY = gql`
  query {
    contact(where: { slug: "contact" }) {
      title
      description {
        text
      }
      background {
        url
      }
    }
  }
`;

export default CONTACT_QUERY;