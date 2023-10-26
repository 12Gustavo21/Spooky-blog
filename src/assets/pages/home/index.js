import React, { lazy, Suspense } from "react";

//Apollo
import { useQuery } from '@apollo/client';

//Services
import HOME_QUERY from '../../services/querys/homeQuery';

//Styles
import * as S from './style';

//Components
import Layout from '../../components/layout';
const Florest3D = lazy(() => import("../../components/spline/index"));

export default function Home() {

    const { data, loading, error } = useQuery(HOME_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    /* const { home } = data; */

    return (
        <>
            <Layout>
                <S.Main>
                    <S.ContentWrapper>
                        <h1>Gustavo <span>Almeida</span></h1>
                    </S.ContentWrapper>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Florest3D />
                    </Suspense>
                </S.Main>
            </Layout>
        </>
    )
}
