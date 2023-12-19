import React, { useEffect, Suspense, lazy } from 'react';

//Apollo
import { useQuery } from '@apollo/client';

//Services
import TECH_QUERY from '../../services/querys/techstackQuery';

//Styles
import * as S from './style';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//Components
import Layout from '../../components/layout';
import nightBackground from '../../components/nightBackground';
import Loading from '../../components/loading';
const Technologies = lazy(() => import('../../components/technologies'));

export default function Index() {

    useEffect(() => {
        AOS.init();
    });

    const { data, loading, error } = useQuery(TECH_QUERY);

    if (loading) return <Loading />;
    if (error) return <p>Error :(</p>;

    const tech = data.techStack;

    console.log(data);

    return (
        <>
            <Layout>
                <nightBackground />
                <S.Main>
                    <S.ContentWrapper>
                        <S.TitleWrapper data-aos="fade-up" data-aos-duration="1500">
                            <h1>{tech.title}</h1>
                        </S.TitleWrapper>
                        <div data-aos="fade-up" data-aos-duration="1750">
                            <p>{tech.description}</p>
                        </div>
                    </S.ContentWrapper>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Technologies tech={tech} />
                    </Suspense>
                </S.Main>
            </Layout>
        </>
    )
}