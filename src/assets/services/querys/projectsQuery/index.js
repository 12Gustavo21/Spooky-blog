import { gql } from "@apollo/client";

export const PROJECTS_QUERY = gql`
  query {
    project(where: { slug: "projects" }) {
      title
      description
      background {
        url
      }
      cards(orderBy: publishedAt_DESC) {
        projectImage {
          url
        }
        projectName
        projectDeploy
        projectRepositorie
      }
    }
  }
`;

export default PROJECTS_QUERY;
