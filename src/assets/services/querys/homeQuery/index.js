import { gql } from "@apollo/client";

export const HOME_QUERY = gql`
    query {
        home(where: {slug: "home"}) {
            title {
                text
            }
        }
    }
`;

export default HOME_QUERY;