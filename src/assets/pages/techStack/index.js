import React, { useEffect, Suspense, lazy } from "react";

//Apollo
import { useQuery } from "@apollo/client";

//Services
import TECH_QUERY from "../../services/querys/techstackQuery";

//Styles
import * as S from "./style";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

//Pages
import Error from "../error"

//Components
import Layout from "../../components/layout";
import Loading from "../../components/loading";
import Starfield from "../../components/nightBackground";
import LoadingSpinner from "../../components/loadingSpinner";
const Technologies = lazy(() => import("../../components/technologies"));

export default function Index() {
  useEffect(() => {
    AOS.init();
  });

  const { data, loading, error } = useQuery(TECH_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const tech = data.techStack;

  return (
    <>
      <Layout positionFooter="relative">
        <S.CanvasWrapper>
          <Starfield />
        </S.CanvasWrapper>
        <S.Main>
          <S.ContentWrapper>
            <S.TitleWrapper data-aos="fade-up" data-aos-duration="1500">
              <h1>{tech.title}</h1>
            </S.TitleWrapper>
            <S.DescriptionWrapper data-aos="fade-up" data-aos-duration="1750">
              <p>{tech.description}</p>
            </S.DescriptionWrapper>
          </S.ContentWrapper>
          <Suspense fallback={<LoadingSpinner />}>
            <Technologies tech={tech} />
          </Suspense>
        </S.Main>
      </Layout>
    </>
  );
}
