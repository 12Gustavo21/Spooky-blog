import { gql } from "@apollo/client";

export const ABOUT_QUERY = gql`
  query {
    about(where: { slug: "about" }) {
      aboutTitle
      aboutText
      workTitle
      works {
        workDescription
        workEnterprise
        enterpriseSvg {
          url
        }
        workStart
        workEnd
        calendarSvg {
          url
        }
      }
      educationTitle
      educations {
        educationDescription
        educationEnterprise
        enterpriseSvg {
          url
        }
        educationStart
        educationEnd
        calendarSvg {
          url
        }
      }
      background {
        url
      }
    }
  }
`;

export default ABOUT_QUERY;