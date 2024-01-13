import React, { Suspense, lazy, useEffect } from "react";

//Styles
import * as S from "./style";

//Apollo
import { useQuery } from "@apollo/client";

//Services
import PROJECTS_QUERY from "../../services/querys/projectsQuery";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

//Pages
import Error from "../error500";

//Components
import Layout from "../../components/layout";
import BatComponent from "../../components/bats";
import Loading from "../../components/loading";
import LoadingSpinner from "../../components/loadingSpinner";
const Cards = lazy(() => import("../../components/projectCard"));

export default function Index() {
  useEffect(() => {
    AOS.init();
  });

  const { data, loading, error } = useQuery(PROJECTS_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const projects = data.project;

  return (
    <>
      <Layout backgroundFooter="#060d11">
        <S.Main background={projects.background.url}>
          <BatComponent numberOfBats={10} />
          <S.ContentWrapper>
            <S.ProjectsTitle>
              <S.TitleWrapper data-aos="fade-up" data-aos-duration="1500">
                <h1>{projects.title}</h1>
              </S.TitleWrapper>
              <S.DescriptionWrapper data-aos="fade-up" data-aos-duration="1750">
                <p>{projects.description}</p>
              </S.DescriptionWrapper>
            </S.ProjectsTitle>
            <S.CardsWrapper>
              <Suspense fallback={<LoadingSpinner />}>
                <Cards project={projects} />
              </Suspense>
            </S.CardsWrapper>
          </S.ContentWrapper>
        </S.Main>
      </Layout>
    </>
  );
}
