import React, { useEffect } from "react";

//Apollo
import { useQuery } from "@apollo/client";

//Services
import ABOUT_QUERY from "../../services/querys/aboutQuery";

//Styles
import * as S from "./style";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

//Pages
import Error from "../error500";

//Components
import Layout from "../../components/layout";
import Loading from "../../components/loading";
import FireflyAnimation from "../../components/fireflieis";

function FireflyCanvas() {
  return (
    <S.CanvasWrapper>
      <FireflyAnimation />
    </S.CanvasWrapper>
  );
}

function AboutSection({ about }) {
  return (
    <S.AboutWrapper>
      <S.AboutTitleDivision data-aos="fade-up" data-aos-duration="1500">
        <h1>{about.aboutTitle}</h1>
      </S.AboutTitleDivision>
      <S.AboutTextDivision data-aos="fade-up" data-aos-duration="1750">
        <p>{about.aboutText}</p>
      </S.AboutTextDivision>
    </S.AboutWrapper>
  );
}

function WorkSection({ about }) {
  return (
    <S.WorkWrapper>
      <S.WorkTitleDivision
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
      >
        <h2>{about.workTitle}</h2>
      </S.WorkTitleDivision>
      <S.WorkDivision>
        {about.works.map((work, index) => (
          <S.Work
            key={index}
            data-aos="fade-up"
            data-aos-duration="2250"
            data-aos-anchor-placement="top-bottom"
          >
            <S.WorkTitleBox>
              <h3>{work.workDescription}</h3>
            </S.WorkTitleBox>
            <S.WorkDescriptionBox>
              <S.WorkEnterpriseBox>
                <img src={work.enterpriseSvg.url} alt="Enterprise icon" />
                <p>{work.workEnterprise}</p>
              </S.WorkEnterpriseBox>
              <S.WorkDateBox>
                <img src={work.calendarSvg.url} alt="Calendar icon" />
                <p>
                  {work.workStart} - {work.workEnd}
                </p>
              </S.WorkDateBox>
            </S.WorkDescriptionBox>
          </S.Work>
        ))}
      </S.WorkDivision>
    </S.WorkWrapper>
  );
}

function EducationSection({ about }) {
  return (
    <S.EducationWrapper>
      <S.EducationTitleDivision
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-anchor-placement="top-bottom"
      >
        <h2>{about.educationTitle}</h2>
      </S.EducationTitleDivision>
      <S.EducationDivision>
        {about.educations.map((education, index) => (
          <S.Education
            key={index}
            data-aos="fade-up"
            data-aos-duration="2750"
            data-aos-anchor-placement="top-bottom"
          >
            <S.EducationTitleBox>
              <h3>{education.educationDescription}</h3>
            </S.EducationTitleBox>
            <S.EducationDescriptionBox>
              <S.EducationEnterpriseBox>
                <img src={education.enterpriseSvg.url} alt="Enterprise icon" />
                <p>{education.educationEnterprise}</p>
              </S.EducationEnterpriseBox>
              <S.EducationDateBox>
                <img src={education.calendarSvg.url} alt="Calendar icon" />
                <p>
                  {education.educationStart} - {education.educationEnd}
                </p>
              </S.EducationDateBox>
            </S.EducationDescriptionBox>
          </S.Education>
        ))}
      </S.EducationDivision>
    </S.EducationWrapper>
  );
}

function Index() {
  useEffect(() => {
    AOS.init();
  });

  const { data, loading, error } = useQuery(ABOUT_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { about } = data;

  return (
    <Layout backgroundFooter="#070c11">
      <S.Main background={about.background.url}>
        <FireflyCanvas />
        <S.ContentWrapper>
          <AboutSection about={about} />
          <WorkSection about={about} />
          <EducationSection about={about} />
        </S.ContentWrapper>
      </S.Main>
    </Layout>
  );
}

export default Index;
