import { gql } from "@apollo/client";

export const HOME_QUERY = gql`
    query {
        home(where: {slug: "home"}) {
            profilePhoto {
            url
            }
        }
    }
`;

export default HOME_QUERY;