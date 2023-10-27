import React, { lazy, Suspense } from "react";

//Apollo
import { useQuery } from '@apollo/client';

//Services
import HOME_QUERY from '../../services/querys/homeQuery';

//Styles
import * as S from './style';

//Components
import Layout from '../../components/layout';
const Forest3D = lazy(() => import("../../components/spline/index"));

export default function Home() {

    const { data, loading, error } = useQuery(HOME_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    const { home } = data;

    return (
        <>
            <Layout positionHeader="fixed" positionFooter="absolute">
                <S.Main>
                    <S.ContentWrapper>
                        <h1 dangerouslySetInnerHTML={{ __html: home.title.text.replace(/\\n/g, '') }}></h1>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>


                                <filter id="squiggly-0">
                                    <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
                                    <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                                </filter>
                                <filter id="squiggly-1">
                                    <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
                                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                                </filter>

                                <filter id="squiggly-2">
                                    <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                                </filter>
                                <filter id="squiggly-3">
                                    <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
                                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                                </filter>

                                <filter id="squiggly-4">
                                    <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
                                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                                </filter>
                            </defs>
                        </svg>
                    </S.ContentWrapper>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Forest3D />
                    </Suspense>
                </S.Main>
            </Layout>
        </>
    )
}
