import { gql } from "@apollo/client";

export const TECH_QUERY = gql`
    query {
        techStack(where: {slug: "techstack"}) {
            title
            description
            technology
        }
    }
`;

export default TECH_QUERY;